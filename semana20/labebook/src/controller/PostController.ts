import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { connection } from "../data/connection";


export class PostController{
    async createPost(req:Request,res:Response){
        try{
            const {photo,description,type}=req.body
            const token = req.headers.authorization as string
            if(!photo || !description || !type){
                throw new Error("Parâmetros faltando")
            }
            console.log(type)
            if(type !=="normal" && type !=="evento"){
                throw new Error("o tipo é normal ou evento")
            }
            if(!token){
                throw new Error("token não foi passado")
            }
            const postBusiness = new PostBusiness()
            await postBusiness.createUser(photo,description,type,token)
            res.status(200).send("Post  criado com sucesso")
        }
        catch(error:any){
            res.status(500).send(error.message)
        }
        }
        async getPostById(req:Request,res:Response){
            try{
                const id = req.params.id
                if(!id){
                    throw new Error("id não passado")
                }
                const postBusiness = new PostBusiness()
                const post =await postBusiness.getPostById(id)
                res.status(200).send({post})
            }
            catch(error:any){
                res.status(500).send(error.message)
            }
        }
}