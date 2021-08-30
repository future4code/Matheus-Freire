import { config } from "dotenv";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import transporter from "../services/mailTransporter";

config()
export const createUser = async(req:Request,res:Response)=>{
    try{
        const {name,email}=req.body
        if(!name || !email){
            res.statusCode=422
            throw "'name' ou 'email' incorretos"
        }
        await connection("teste_usuario")
        .insert({
            name:name,
            email:email
        })

        const mailInfo = await transporter.sendMail({
            from:`<${process.env.NODEMAILER_USER}>`,
            to:email,
            subject:`Finalize seu cadastro ${name}`,
            html:`
            <p>clique no botão abaixo para confirmar o email<p/>
            <button>Verificar</button>
            `
        })
        console.log(mailInfo)
        res.status(200).send("usuário criado")
    }catch(error){
        if(typeof error==="string"){
            res.send(error)
        }
        else{
            console.log(error.sqlMessage || error.message);
             res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}