import { Request, Response } from "express";
import { getData } from "../data/getData";
import { getUserById } from "../data/getUserById";


export const getUserId = async(req:Request,res:Response)=>{
    try{
        const token = req.headers.authorization as string
        const AuthenticationData = getData(token) as any
        console.log(AuthenticationData.id.id,"data")
        const user = await getUserById(AuthenticationData.id.id)
        console.log(user,"na")
        res.status(200).send({
            id:user.id,
            email:user.email
        })
    }
    catch(error){

    }
}