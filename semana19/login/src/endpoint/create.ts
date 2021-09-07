import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateToken } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const create = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {email,password} = req.body
        
        if ( !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos  'password' e 'email'")
         }
         if(email.indexOf("@")===-1){
             throw new Error("Falta o @ no email!")
         }
         if(password.length<6){
             throw new Error("Senha com menos de 6 caracteres")
         }
        const id:string = IdGenerator() 
        const token =  generateToken({id})
        console.log(token)
         const result = await createUser(id,email,password)
        console.log(result)
         res.status(200).send(token)
    }
    catch (error:any) {
        res.status(400).send({
            message: error.message,
          });
   }
}
