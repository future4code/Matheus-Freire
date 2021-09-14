import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";


export const signupController = async(req:Request,res:Response)=>{
    try{
        const {email,name,password,role} = req.body
        const token = await signupBusiness({email,name,password,role})
        res.status(200).send({token})
    }
    catch(error:any){
        res.statusMessage = error.message
        res.status(500).end()
    }
}