import { connection } from "../index"


export const getUserByEmail = async(email:string)=>{
    const result = await connection("User_Arq")
    .select()
    .where({email})
    return result
}