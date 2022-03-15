
import { createUser } from "../data/createUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";


export const signupBusiness = async({email,name,password,role}:any)=>{
    console.log(password)
    if(!email || !name || !password ){
        throw new Error("Please fill all the fields");
    }
    if(email.indexOf("@") === -1){
        throw new Error("Invalid Email");
    }
    console.log("oi")
    const id = generateId()
    console.log(id)
    const hashPassword = await hash(password)
    console.log(hashPassword)
    await createUser({id,email,name,hashPassword,role})
    const token = generateToken({id, role});
    console.log(token)
    return token
}