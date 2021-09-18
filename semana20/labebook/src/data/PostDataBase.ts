import { connection } from "./connection";


export class PostDataBase{
    async create(id:string,photo:string,description:string,type:string,authorId:string){
        
        await connection("labook_posts")
        .insert({id,photo,description,type,author_id:authorId})
    }
    async getPost(id:string){
        const post = await connection("labook_posts").select().where({id})
        return post
    }
}