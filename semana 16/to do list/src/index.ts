import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import { connection } from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

//-------------------------------> funcoes<----------------
const pegarUsuarios = async() =>{
    const result =await connection("usuarios")
   return result
}
const adicionarUsuario = async(name:string,email:string,nickname:string) =>{
    await connection
    .insert({
        id: Date.now(),
        name: name,
        email:email,
        nickname:nickname
    })
    .into("usuarios")
}
const pegarUsuarioID=async(id:string):Promise<any>=>{
    const result = await connection.raw(`
    SELECT id,nickname FROM usuarios
    WHERE id="${id}"
    `)
    return result[0][0]
}

const editarUsuario=async(id:string,nome:string,nickname:string):Promise<any>=>{
    await connection("usuarios")
    .update({
        name:nome,
        nickname:nickname
    })
    .where("id",id)
}

const adicionarTarefa = async(title:string,description:string,limitDate:Date,creatorUserId:string)=>{
    await connection
    .insert({
        id:Date.now(),
        title:title,
        description:description,
        limit_date: limitDate,
        creator_user_id:creatorUserId
    })
    .into("criartarefa")
}
const pegarTask = async(id:string)=>{
    const result = await connection.raw(`
    select creator_user_id, title,description,status,limit_date,name from usuarios
    join criartarefa
    on criartarefa.creator_user_id="${id}";
    `)
    return result[0][0]
}
//-------------------------------> gete,put,post,delete<----------------
//1)
app.put("/user",async(req,res)=>{
    let errorCode = 400
    try{
        const {name,email,nickname} = req.body
        if(!name || !email || !nickname){
            errorCode=404
            throw new Error("Parâmetros não preeenchidos!")
        }
        const result=await pegarUsuarios()
        const emailExiste = result?.find((x)=>{
            return x.email===email
        })
        if(emailExiste){
            errorCode=404
            throw new Error("Email já cadastrado")
        }
        await adicionarUsuario(name,email,nickname)
        res.status(200).send("usuário cadastrado com sucesso!")
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})
//2
app.get("/user/:id",async(req,res)=>{
    let errorCode=400
   try{
    const id =req.params.id
    const result=await pegarUsuarioID(id)
    if(!result){
        errorCode=404
        throw new Error("Id do usuário não existe")
    }
    res.status(200).send(result)
   } 
   catch(error){
    res.status(400).send({message:error.message})
   }
})
//3
app.post("/user/edit/:id",async(req,res)=>{
    let errorCode = 400
    try{
        const id =req.params.id
        const {name,nickname}=req.body
        if(!name || !nickname){
            errorCode=404
            throw new Error("Parâmetros não fornecidos ou vazios!")
        }
        await editarUsuario(id,name,nickname)
        res.status(200).send("Nome e nickname alterados com sucesso!")
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})
//4
app.put("/task",async(req,res)=>{
    let errorCode=400
    try{
        const {title,description,limitDate,creatorUserId} = req.body
        const [day,month,year]=limitDate.split("/")
        const date:Date=new Date(`${year}-${month}-${day}`)
        if(!title || !description || !limitDate|| !creatorUserId){
            errorCode=404
            throw new Error("Parâmetros não preenchidos")
        }
        await adicionarTarefa(title,description,date,creatorUserId)
        res.status(200).send("Parâmetros adicionados!")
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})
//5
app.get("/task/:id",async(req,res)=>{
    let errorCode=400
    try{
        const id = req.params.id
        const result = await pegarTask(id)
        if(!result){
            errorCode=404
            throw new Error("id não existe")
        }
        console.log(result.limit_date)
        //faltou trocar a data
        res.status(200).send(result)
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})

//6
app.get("/userr/all",async(req,res)=>{
    try{
        const result = await pegarUsuarios()
        res.send(result)
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})

//7
app.get("/task",async(req,res)=>{
    try{
        const id=req.query.id
        const result =await pegarTask(id as string)
        res.send(result?{ task:[result]}:{ task:[]} )
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});