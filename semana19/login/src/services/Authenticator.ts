import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
config()
  const expiresIn = "10min";
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
    return token;
  }


export type AuthenticationData = {
  id: string;
}