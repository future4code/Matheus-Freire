import bcrypt from "bcryptjs"

export class HashManager {
     hash = async(s:string):Promise<string>=>{
        const rounds = await Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        console.log("salt", salt)
        const result = await bcrypt.hash(s,salt)
        return result
    }
    compare=async(s:string,hash:string):Promise<boolean>=>{
        const result = await bcrypt.compare(s,hash)
        return result
    }
    
} 

