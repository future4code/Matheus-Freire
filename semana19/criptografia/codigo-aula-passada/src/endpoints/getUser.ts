import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
export const getUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        const token = req.headers.authorization
        const autenticar = new Authenticator().getTokenData(token)
        if (autenticar.role !== "normal") {
            throw new Error("Only a normal user can access this funcionality");
          }
        const user = await connection("to_do_list_users").select().where(autenticar.id)
        res.status(200).send(user)
    }
    catch(error){

    }
}