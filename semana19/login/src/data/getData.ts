import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../services/Authenticator";

export const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    console.log("pay",payload)
    const result = {
      id: payload.id,
    };
    
    return result;
  };