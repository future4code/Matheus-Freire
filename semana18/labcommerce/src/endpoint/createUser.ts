import { Request,Response } from "express";
import { User } from "../classes/User";
import { UserDataBase } from "../dataBase/UserDataBase";


export const createUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        console.log("oi")
        const {name,email,age}=req.body
        const user=new User(name,email,age)
        const userDataBase = new UserDataBase()
        await userDataBase.create(user)
        res.status(200).send("Usuário cadastrado!")
    }
    catch(error){
        res.status(500).send({ message: error.sqlMessage || error.message })
    }
}
