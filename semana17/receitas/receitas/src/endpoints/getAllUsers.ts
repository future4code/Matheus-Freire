import { strict } from "assert"
import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "../data/selectAllUsers"
import { recipe } from "../types"
// 1
// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const nome:string = req.query.nome as string 
      
//       const users = await selectAllUsers(nome)

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No recipes found")
//       }

//       res.status(200).send(users)
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }


//2
// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const type = req.params.type
//       const users = await connection("aula48_exercicio")
//       .where("type",`${type}`)

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No recipes found")
//       }

//       res.status(200).send(users)
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//      const sort = req.query.sort || "email"
//      const order = req.query.order || "desc"
//      const page = Number(req.query.page) || 1
//      const size = Number(req.query.size) || 10
//      if(order !== "asc" && order !=="desc"){
//       res.statusCode=422
//       throw new Error("order must be either asc or desc ")
//    }
//    if(sort !== "name" && sort !=="type" && sort !=="email"){
//       res.statusCode=422
//       throw new Error("sort must be either created_at or title ")
//    }
//    const offset = size*(page-1)
//    console.log(offset)
//       const users = await connection("aula48_exercicio")
//       .orderBy(sort,order)
//       .limit(size)
//       .offset(offset)
     
//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No recipes found")
//       }

//       res.status(200).send(users)
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

//4

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const nome = req.query.name || "%"
     const sort = req.query.sort || "name"
      const order = req.query.order || "desc"
      const page = Number(req.query.page) || 1
     if(sort !=="name" && sort !=="email" && sort !=="type"){
      res.statusCode=422
      throw new Error("sort tem que ser igual a name, email ou type")
     }
     if(order !=="asc" && order !=="desc"){
      res.statusCode=422
      throw new Error("order tem que ser asc ou desc")
     }
     const offset = 5*(page-1)
      const users = await connection("aula48_exercicio")
      .where("name","LIKE",`${nome}`)
      .orderBy(sort,order)
      .limit(5)
      .offset(offset)
      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}