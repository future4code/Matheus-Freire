import { Request, Response } from "express";
import { connection } from "../connection";
import { Authenticator } from "../services/Authenticator";

export const getUserById = async(req:Request,res:Response):Promise<void>=>{
    try{
        const id = req.params.id
        const token = req.headers.authorization
        const tokenData = new Authenticator().getTokenData(token)
        if(!tokenData){
            res.statusCode = 401
            throw new Error("Não autorizado")
        }
        const [user]= await connection("cookenu_users").select().where({id})
        const Usuario = {
            id:user.id,
            name:user.name,
            email:user.email
        }
        res.status(200).send(Usuario)
    }
    catch(error){
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
         } else {
            res.send({ message: error.sqlMessage || error.message })
         }
    }
}