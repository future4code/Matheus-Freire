import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
import { JwtPayload, sign, verify } from "jsonwebtoken"
config()
export interface authenticationData {
    id: string
 }
const expiresIn = "1d"
export class Authenticator {
    public generateToken=(id:authenticationData)=>{
        const token = jwt.sign(
            {id:id},process.env.JWT_KEY as string,{expiresIn}
        )
        return token
    }
    public getTokenData = (token:string) =>{
        try{
            const tokenData = verify(token,process.env.JWT_KEY) as authenticationData
            return {
                id:tokenData.id
            }
        }
        catch(error){
            return null
        }
    }
}