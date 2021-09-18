

import { connection } from "../data/connection";
import { PostDataBase } from "../data/PostDataBase";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenrator } from "../services/IdGenerator";
export class PostBusiness{
    async createUser(photo:string,description:string,type:string,token:string){
       const id = new IdGenrator().generateId()
       const authenticator = new Authenticator()
        const authorId = authenticator.getTokenData(token) 
        if(!authorId){
            throw new Error("token não existe")
        }
        const post = new PostDataBase()
        await post.create(id,photo,description,type,authorId.id)
    }
    async getPostById(id:string){
        const postDataBase = new PostDataBase()
        const post = await postDataBase.getPost(id)
        if(post.length===0){
            throw new Error("Não existem posts com esse id")
        }

        return post
    }
}