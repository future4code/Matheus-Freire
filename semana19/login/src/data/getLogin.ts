import { connection } from "../connection"

export const getLogin =async(email:string)=>{
    const result = await connection("User")
    .select()
    .where({email})
    return result
}