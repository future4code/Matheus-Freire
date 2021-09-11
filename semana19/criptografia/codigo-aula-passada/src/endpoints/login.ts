import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (
   req: Request,
   res: Response
) => {
   try {

      // buscar o usuário no banco por email
      const { email, password } = req.body

      const [user] = await connection("to_do_list_users").where({ email })
      const hashManager = new HashManager()
      const hash = await hashManager.hash(password)
      const compare = await hashManager.compare(password,hash)
      // conferir se ele existe e a senha está correta
      if(!user || !compare){
         res.statusCode = 401
         throw new Error("Credenciais inválidas")
      }

      // gerar o token e enviar na resposta da requisição
      const token:string = new Authenticator().generateToken({
         id: user.id,
         role:user.role
      })

      res.send({token})

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}