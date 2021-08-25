import axios from "axios";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAdressInfo } from "../services/getAdressInfo";

export const createAdress = async(req:Request,res:Response)=>{
   try{
      const {cep,number} = req.body
      if(!cep || !number){
         res.statusCode=422
         throw "'cep' e 'number' são obrigatórios"
      }
      const adress = await getAdressInfo(cep)
      const result = await connection("endereco")
      .insert({
         cep:cep,
         neighbohood: adress?.logradouro,
         number: number,
         street: adress?.bairro,
         city: adress?.cidade,
         state: adress?.estado
      })
     
      res.status(200).send("Endereço adicionado")
   }catch(error){
      if(typeof error==="string"){
         res.send(error)
      }
      else{
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}