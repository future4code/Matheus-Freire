import * as jwt from "jsonwebtoken"

interface AuthenticationData{
    id:string
}

export class Authenticator{
    generateToken(id:AuthenticationData){
        const token = jwt.sign(
            {id:id.id},
            process.env.JWT_KEY as string,
            {expiresIn:"10 days"}
        )
        console.log(token)
        return token
    }
    getTokenData(token:string){
        const payload = jwt.verify(token,process.env.JWT_KEY as string)
        return payload as AuthenticationData
    }
}