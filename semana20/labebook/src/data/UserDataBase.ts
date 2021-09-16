import { connection } from "./connection";


export class UserDataBase{
    async create(id:string,name:string,email:string,passwordHash:string){
        await connection("labook")
        .insert({id,name,email,password:passwordHash})
    }
}