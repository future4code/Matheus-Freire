import { Request, Response } from "express";
import { User } from "../classes/User";
import { DataBase } from "../data/DataBase";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManagerAsync } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const signup = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {name,email,password} = req.body
        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error("'name', 'email' ou 'password' não digitados")
        }
        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha deve ter no mínimo 6 caracteres")
         }
        const id:string = new IdGenerator().generateId() 
        const token = new Authenticator().generateToken({id})
        const hashManager = new HashManagerAsync()
        const hash = await hashManager.hash(password)
        const user = new UserDataBase()
       
        await user.create(id,name,email,hash)
       
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