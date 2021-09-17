import * as bcrypt from "bcryptjs"

export class HashManager{
    async hash(password:string):Promise<string>{
        const cost = 5 
        const salt = await bcrypt.genSalt(cost)
        const result = bcrypt.hashSync(password, salt)
        return result
    }

    async compare(password:string, hash:string):Promise<boolean>{
            const hashCompare:boolean=await bcrypt.compare(password,hash)

            return hashCompare
        }
}