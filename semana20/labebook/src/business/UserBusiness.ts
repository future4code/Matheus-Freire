import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenrator } from "../services/IdGenerator";


export class UserBusiness{
    async signup(name:string,email:string,password:string){
        const idGenerator = new IdGenrator()
        const id = idGenerator.generateId()
        if(password.length<6){
            throw new Error("Senha com menos de 6 caracteres")
        }

        const hashManager = new HashManager()
        const passwordHash = await hashManager.hash(password)

        const userDatabase = new UserDataBase()
        const user = await userDatabase.getUserByEmail(email)
        console.log(user)
        if(user){
            throw new Error("Usuário com esse email já existe")
        }
        const createUser =await userDatabase.create(id,name,email,passwordHash)
       
        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id:id})
        return {
            token:token
            
        }
    }
    async login(email:string,password:string){
        const userDatabase = new UserDataBase()
        const user = await userDatabase.getUserByEmail(email)
        if(user?.email!==email){
            throw new Error("email não cadatrado")
        }
        const hashManager = new HashManager()
        const compare = await hashManager.compare(password,user.password)
        if(compare===false){
            throw new Error("Senha incorreta!")
        }
        const token = new Authenticator().generateToken({id:user.id})
        return {
            token
        }
    }
} 