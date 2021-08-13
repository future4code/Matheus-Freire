import express,{Express,Request,Response} from 'express'
import cors from 'cors'

const app:Express=express()
app.use(express.json())
app.use(cors())

type usuario={
    id:number,
    nome: string,
    cpf: number,
    nascimento: number,
    saldo: number,
    operacoes: [{
        tipo: string,
        valor: number
    }]
}

const bankUsers: usuario[] =[
    {
        id:1,
        nome: "matheus",
        cpf: 11438556632,
        nascimento: 1995,
        saldo: 25,
        operacoes:[{
            tipo:"",
            valor: 0
        }]  
    },
    {
        id:2,
        nome: "mathxsd",
        cpf: 114385566112,
        nascimento: 199511,
        saldo: 25,
        operacoes:[{
            tipo:"",
            valor: 0
        }]
    }
] 
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
