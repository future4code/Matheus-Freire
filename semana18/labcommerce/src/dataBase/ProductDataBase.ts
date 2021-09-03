import { Product } from "../classes/Product";
import { DataBase } from "./DataBase";

type productsdb={
    name:string,
    description:string,
    price:number
    id:number
}

export class ProductDataBase extends DataBase{
    private TABLE_NAME="product"
    async create(product:Product){
        await DataBase.connection(this.TABLE_NAME)
        .insert(product)
    }
    async getAll(){
        return DataBase.connection(this.TABLE_NAME).select()
       
    }
}
