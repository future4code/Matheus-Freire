import { Request, Response } from "express";
import { getLogin } from "../data/getLogin";

export const getUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        const email:string = req.body.email
        const result = await getLogin(email)
        res.status(200).send(result)
    }
    catch(error:any){
        res.status(400).send({
            message: error.message,
          });
    }
}