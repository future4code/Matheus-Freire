import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateToken } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator"

export const createLogin = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {email,password}=req.body
        
        const id =IdGenerator()
        await createUser(id,email,password)
        const token = generateToken({id})
        res.status(200).send({"token":token})
    }
    catch(error:any){
        res.status(400).send({
            message: error.message,
          });
    }
}