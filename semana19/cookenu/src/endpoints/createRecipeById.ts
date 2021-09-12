import { Request, Response } from "express";
import { connection } from "../connection";


export const createRecipeById = async(req:Request,res:Response):Promise<void>=>{
    try{
        const id = req.params.id
       const [recipe] = await connection("receitas")
       .select()
       .where({id})
        res.status(200).send({title:recipe.title,descriptio:recipe.description})
    }
    catch(error){

    }
}