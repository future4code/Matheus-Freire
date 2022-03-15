import { Request, Response } from "express";
import { connection } from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const createRecipe = async(req:Request,res:Response):Promise<void>=>{
    try{
        const token = req.headers.authorization
        const {title,description} = req.body
        const tokenData = new Authenticator().getTokenData(token)
        const author_id = tokenData.id
        console.log(author_id)
        const id = new IdGenerator().generateId()
        const createAt = new Date()
        await connection("receitas").insert({id,title,description,data:createAt,author_id})
        res.status(200).send("Receita criada com sucesso")
    }
    catch(error){
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
         } else {
            res.send({ message: error.sqlMessage || error.message })
         }
    }
}