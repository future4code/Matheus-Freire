import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenrator } from "../services/IdGenerator";


export class UserBusiness{
    async signup(name:string,email:string,password:string){
        const idGenerator = new IdGenrator()
        const id = idGenerator.generateId()

        const hashManager = new HashManager()
        const passwordHash = await hashManager.hash(password)

        const userDatabase = new UserDataBase()
        await userDatabase.create(id,name,email,passwordHash)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id:id})
        return {
            token:token
        }
    }
} 