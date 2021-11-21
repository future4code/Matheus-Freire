import { connection } from "./connection";

export interface User{
    id:string,
    name:string,
    email:string,
    passwordHash:string
}
export class UserDataBase{
    async create(id:string,name:string,email:string,passwordHash:string){
        await connection("labook")
        .insert({id,name,email,password:passwordHash})
    }

    async getUserByEmail(email:string){
        const users = await connection("labook")
        .select()
        .where({email: email})
        
        if(!users[0]){
            return null
        }
        return users[0]
    }
    
}

