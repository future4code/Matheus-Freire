import { Request, Response } from "express";
import { connection } from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManagerAsync } from "../services/HashManager";


export const login = async(req:Request,res:Response):Promise<void>=>{
    try{
        
        const {email,password}=req.body
        if(!email || !password){
            res.statusCode=422
            throw new Error("email ou password n]ao digitados corretamente")
        }
        const [user] = await connection("cookenu_users").select().where({email})
        console.log("id",user)
        const hashManager = new HashManagerAsync()
        const isPasswordCorrect =await hashManager.compare(password,user.password)
        if(!user || !isPasswordCorrect){
            res.statusCode = 401
            throw new Error("Credenciais inválidas")
         }
        
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id:user.id})
        res.status(200).send({token})
        
    }
    catch(error){
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
         } else {
            res.send({ message: error.sqlMessage || error.message })
         }
    }
}