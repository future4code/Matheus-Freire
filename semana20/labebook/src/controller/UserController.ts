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
           const output=  await userBusiness.signup(name,email,password)
           
           res.status(200).send({token:output.token})
        }
        catch(error:any){
            res.status(500).send(error.message)
        }
    }
    async login(req:Request,res:Response){
        try{
            const {email,password} = req.body
            if(!email || !password){
                throw new Error("Parâmetros faltando")
            }
            if(password.length<6){
                throw new Error("Senha tem que ter 6 caracteres")
            }
            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(email,password)
            res.status(200).send({token})
        }
        catch(error:any){
            res.status(500).send(error.message)
        }

    }
}