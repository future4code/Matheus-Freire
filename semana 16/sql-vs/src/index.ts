import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';
const app: Express = express();

app.use(express.json());
app.use(cors());

  const updateSalary = async(id: string, salary:number):Promise<any>=>{
      await connection("Actor")
      .update({
          salary:salary
      })
      .where("id",id)
  }
  const deleteActor =async(id:string):Promise<any>=>{
      await connection("Actor")
      .delete()
      .where("id",id)
  }
  const mediaSalario = async(gender:string):Promise<any>=>{
      
      const result = await connection("Actor")
      .avg("salary")
      .where({gender})
      return result[0]
  }
 
  const getActorById =async(id:string):Promise<any>=>{
      const result=await connection.raw(`
      SELECT * FROM Actor Where id="${id}"
      `)
      return result[0][0]
  }
  app.get("/actor/:id",async(req,res)=>{
      try{
        const id = req.params.id
        const result=await getActorById(id)
        res.status(200).send(result)
      }catch(error){
        res.status(400).send({message:error.message})
      }
  })
  const quantidadeAtores= async(gender:string):Promise<any>=>{
      const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender=${gender}
      `)
      return result[0][0].count
  }
  app.get("/actor",async(req,res)=>{
    try{
     const gender=req.query.gender
     const count = await quantidadeAtores(gender as string)
     res.status(200).send(`a quantidade de pessoas do gênero ${gender} é ${count}`)
    }catch(error){
      res.status(400).send({message:error.message})
    }
})
const createActor = async(id:string,name:string,salary:number,birthDate:Date,gender:string):Promise<void>=>{
    await connection
    .insert({
        id:id,
        name:name,
        salary:salary,
        birth_date:birthDate,
        gender:gender
    })
    .into("Actor")
}
app.post("/actor",async(req,res)=>{
        try{
            await createActor(
                req.body.id,
                req.body.name,
                req.body.salary,
                req.body.birthDate,
                req.body.gender
            );
            res.status(200).send("ator criado")
        }catch(error){
            res.status(400).send({message:error.message})
        }
})

const atualizarDados = async(id:string,salary:number):Promise<any>=>{
    await connection("Actor")
      .update({
          salary:salary
      })
      .where("id",id)
}

app.put("/actor/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const salary=req.body.salary
        await atualizarDados(id,salary)
        res.status(200).send("Dados atualizados!")

    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})

const deletarId= async(id:string)=>{
    await connection ("Actor")
    .delete()
    .where("id",id)
}

app.delete("/actor/:id",async(req,res)=>{
    try{
        const id = req.params.id
        await deletarId(id)
        res.status(200).send("Deletado com sucesso")
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})

//-------------------->desafios<---------------------------------------
  const adicionarFilme = async(id:string,nome:string,sinopse:string,data:Date,avaliacao:number)=>{
      await connection 
      .insert({
          id:id,
          nome:nome,
          sinopse:sinopse,
          data:data,
          avaliacao:avaliacao
      })
      .into("filmes")
  }
app.post("/movie",async(req,res)=>{
    try{
        await adicionarFilme(
            req.body.id,
            req.body.nome,
            req.body.sinopse,
            req.body.data,
            req.body.avaliacao
        )
        res.status(200).send("Filme adicionado")
    }
    catch(error){
        res.status(400).send({message:error.message})
    }
})

app.get("/movie",async(req,res)=>{
    try{
        const result = await connection("filmes")
        res.status(200).send(result)
    }
   
    catch(error){
        res.status(400).send({message:error.message})
    }
})
const searchAl = async(search:string)=>{
    const result = await connection.raw(`
    SELECT * FROM filmes
    WHERE name like "%${search}%"
    ORDER BY data asc
    `)
return result[0]
}

app.get("/movie/search",async(req,res)=>{
    try{
        const search= req.query.query as string
        const result=await searchAl(search)
        res.status(200).send(result)
    }
    catch(error){

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