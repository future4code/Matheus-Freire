import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController{
    async signup(req:Request,res:Response){
        try{
            const {name,email,password} = req.body
            if(!name || !email || !password){
                throw new Error("Algum parâmetro faltando")
            }
            const userBusiness = new UserBusiness()
           const token =  await userBusiness.signup(name,email,password)
           
           res.status(200).send({token})
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
}