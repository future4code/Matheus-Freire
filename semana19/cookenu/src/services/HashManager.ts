import bcrypt from 'bcryptjs'

export class HashManagerAsync{
    hash = async(password:string):Promise<string>=>{
        const rounds = Number(process.env.BCRYPT_ROUNDS) 
        const salt = bcrypt.genSaltSync(rounds)
        const result = bcrypt.hashSync(password, salt)
        return result
    }
    compare = async(password:string, hash:string)=>{
        const result = await bcrypt.compareSync(password,hash)
        return result
    }
}