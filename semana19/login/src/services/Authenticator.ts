import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
config()
  const expiresIn = "1min";
  export const generateToken=(input: AuthenticationData): string=> {
      
    const token = jwt.sign(
      {
        id: input,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    console.log(token)
    return token;
  }


type AuthenticationData = {
  id: string;
}