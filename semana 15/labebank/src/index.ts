import express,{Express,request,Request,Response} from 'express'
import cors from 'cors'
import { conta } from './conta'
import { Conta } from './types'

const app:Express=express()
app.use(express.json())
app.use(cors())

app.post("/users/create",(req:Request,res:Response)=>{
    try{
        const {name,CPF,dateAsString}=req.body
        const [day,month,year]=dateAsString.split("/")
        const date:Date=new Date(`${year}-${month}-${day}`)
        const idadeEmMilisseconds:number=Date.now() - date.getTime()
        const idadeAnos = idadeEmMilisseconds/1000/60/60/24/365
        console.log(idadeAnos)
        if(idadeAnos<18){
            res.statusCode=404
            throw new Error("Idade menor que 18 anos não é possivel criar conta")
        }
        conta.push({
            name,
            CPF,
            date,
            saldo:0,
            balance:[]
        })
        res.status(200).send("Conta criada com sucesso")
    }catch(error){
        res.send(error.message)
    }
})

app.get("/users",(req:Request,res:Response)=>{
    try{
        if(!conta.length){
            res.statusCode=404
            throw new Error("Não tem nenhum usuário cadastrado")
        }
        res.status(200).send(conta)
    }catch(error){
        res.send(error.message)
    }
})

//adicionar saldo

app.post("/adicionarsaldo/:name/:CPF",(req:Request,res:Response)=>{
    try{
        const nome = req.params.name
        const CPF = req.params.CPF
        const saldo=req.body.saldo
        if(!conta.length){
            res.statusCode=404
            throw new Error("Não tem nenhum usuário cadastrado")
        }
        if(!nome || !CPF){
            res.statusCode=400
            throw new Error("Parâmetro faltando")
        }
        conta.forEach((x)=>{
            if(x.CPF===CPF && x.name===nome){
                return x.saldo+=saldo
            }
        })
        res.status(200).send("Saldo adicionado")
    }catch(error){
        res.send(error.message)
    }
})


//----------------------------------------->pagar conta<--------------------------------
app.post("/pagar/:CPF",(req:Request,res:Response)=>{
    try{
        const CPF = req.params.CPF
        const valor = req.body.valor
        const result:Conta | undefined = conta.find((x)=>{
            return x.CPF ===CPF
        })
        if(!CPF.length){
            res.statusCode=404
            throw new Error("CPF não existe")
        }
        if(result?.saldo>valor){
            conta.forEach((x)=>{
                    return x.saldo-=valor
            })
            res.status(200).send("conta paga com sucesso")
        }
    }catch(error){
        res.send(error.message)
    }
})

app.post("/user",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const {id,nome,cpf,nascimento}=req.body
        if(!id || !nome || !cpf || !nascimento){
            errorCode=422
            throw new Error("Parâmetros inválidos")
        }
        const newUser:usuario={
            id,
            nome,
            cpf,
            nascimento: 2021-nascimento,
            saldo:0,
            operacoes:[{
                tipo:"",
                valor: 0
            }]
        }
        if(newUser.nascimento<18){
            throw new Error("Usuário menor de 18 anos não pode ser cadastrado")
        }
        bankUsers.push(newUser)
        res.status(200).send({message:"Usuário cadastrado", newUser })
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
app.get("/user/:nome/:cpf",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const nome = req.params.nome
        const cpf=Number(req.params.cpf)
        if(!nome && !cpf){

        }
        const result:number | undefined = bankUsers.filter((x)=>{
            return x.nome===nome && x.cpf===cpf
        }).map((x)=>{
            return x.saldo
        }).find((x)=>x)
        if(result===undefined){
            errorCode=400
            throw new Error("usuário ou cpf não encontrado")
        }
        res.status(200).send({message: `seu saldo é de ${result}`})
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
app.put("/user/:nome/:cpf",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const nome = req.params.nome
        const cpf=Number(req.params.cpf)
        if(!nome || !cpf){
            throw new Error("fala parâmetros")
        }
        const adicionaSaldo:number =req.body.saldo
        bankUsers.forEach((x)=>{
            if(x.cpf===cpf && x.nome===nome){
                return x.saldo+=adicionaSaldo
            }
        })
        res.status(204).send({message:"ok"})
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
app.post("/pagar/:cpf",(req:Request,res:Response)=>{
    let errorCode=400
    try{
        const cpf=Number(req.params.cpf)
        if(!cpf){
            errorCode=404
            throw new Error("CPF não existe")
        }
        const tipo:string = req.body.tipo
        const valor =Number(req.body.valor)
        
       bankUsers.forEach((x)=>{
            if(x.cpf===cpf){
                return x.saldo=x.saldo-valor
            }
        })
        const result: usuario | undefined = bankUsers.find((x)=>{
            return x.cpf===cpf
        })
        if(result.saldo<0){
            throw new Error("Não tem saldo para executar a operação")
        }
        const oper = {
            tipo: tipo,
            valor: valor
        }
        result?.operacoes.push(oper)
        console.log(bankUsers)
        res.status(200).send("nada")
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
app.listen(3003,()=>{
    console.log("Servidor Pronto")
})
