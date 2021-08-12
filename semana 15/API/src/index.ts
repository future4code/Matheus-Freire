import express, { Request, Response } from 'express'
import cors from 'cors'
enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.NORMAL,
      age: 60
  }
]

const app=express()
app.use(express.json())
app.use(cors())
//1)
app.get("/users",(req:Request,res:Response)=>{
    let errorCode:number=400
    if(req.query.name || req.query.type){
        try{
            const type:string=req.query.type as string
            const user:User []= users.filter((x)=> x.type===type)
            if(user.length===0){
                errorCode=404
                throw new Error("Usuário não encontrado")
            }
            res.status(200).send(user)
        }catch(error){
            res.status(errorCode).send({message: error.message})
        }
    }
    res.status(200).send(users)
    
})
//2)
app.get("/userss",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const type:string=req.query.type as string
        const user:User []= users.filter((x)=> x.type===type)
        if(user.length===0){
            errorCode=404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
    }catch(error){
        res.status(errorCode).send({message: error.message})
    }
})

//3) 
app.get("/user",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const name:string=req.query.name as string
        const user: User | undefined = users.find((x)=>x.name===name)
        if(!user){
            errorCode=404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

app.post("/users",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const {name,email,type,age}=req.body
        if(!name || !email || !type || !age){
            errorCode=422
            throw new Error("os parâmetros estão incorretos!")
        }
        const newUser:User = {
            id:Date.now(),
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(200).send({message:'Usuário cadastrado com sucesso', newUser})

    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
//5)
app.put("/users/:id",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const id=Number(req.params.id)
        if(isNaN(id)){
            throw new Error("Invalid id")
        }
        users.forEach(user=>{
            if(user.id===id){
                user.name+="-ALTERADO"
            }
        })
        res.status(204).send("User not found")
      
    }catch(error) {
        res.status(errorCode).send({message:error.message})
    }
})

app.patch("/users/:id",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const id=Number(req.params.id)
        if(isNaN(id)){
            throw new Error("invalid id")
        }
        users.forEach(user=>{
            if(user.id===id){
                user.name+="-Realterado"
            }
        })
        res.status(204).send("nome adicionado")
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

app.delete("/users/:id",(req:Request,res:Response)=>{
    let errorCode:number=400
    try{
        const id=Number(req.params.id)
        if(isNaN(id)){
            throw new Error("id inválido")
        }
        for(let i=0;i<users.length;i++){
            if(users[i].id===id){
                users.splice(i,1)
                return res.status(200).end()
            }
        }
        res.status(204).send("User not found")
    }catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

