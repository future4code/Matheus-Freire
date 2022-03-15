import { compare } from "../services/hashManager"
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/authenticator";

export const loginBusiness = async({email,password}:any)=>{
    if(!email || !password){
        throw new Error("Please fill all the fields");
    }
    if(email.indexOf("@") === -1){
        throw new Error("Invalid Email");
    }
    const[ user] = await getUserByEmail(email)
   if(!user){
    throw new Error("Invalid Email"); 
   }
   const passwordIsCorrect: boolean = await compare(password, user.password)
   if (!passwordIsCorrect) {
    throw new Error("Usuário não encontrado ou senha incorreta")
 }
 const token: string = generateToken({
    id: user.id,
    role: user.role
 })
return token
 


}