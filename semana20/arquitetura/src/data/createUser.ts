import { connection } from "../index"


export const createUser = async({id,email,name,hashPassword,role}:any)=>{
    console.log(hashPassword,"senha")
    await connection("User_Arq")
    .insert({id,email,name,password:hashPassword,role})
}