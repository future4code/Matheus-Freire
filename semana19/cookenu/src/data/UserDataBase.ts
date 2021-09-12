import { User } from "../classes/User";
import { DataBase } from "./DataBase";

export class UserDataBase extends DataBase{
    private TABLE_NAME ="cookenu_users"
    async create(id:string,name:string,email:string,hash:string){
        await DataBase.connection(this.TABLE_NAME)
        .insert({id,name,email,hash})
    }
    async getAll(){
        await DataBase.connection(this.TABLE_NAME).select()
    }
}

export type Usuario ={
    id:string,
    name:string,
    email:string,
    password:string
}