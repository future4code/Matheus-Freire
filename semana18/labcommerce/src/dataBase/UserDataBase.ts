import { User } from "../classes/User";
import { DataBase } from "./DataBase";


export class UserDataBase extends DataBase{
    private TABLE_NAME="user"
    async create(user:User){
        await DataBase.connection(this.TABLE_NAME)
        .insert(user)
    }
}