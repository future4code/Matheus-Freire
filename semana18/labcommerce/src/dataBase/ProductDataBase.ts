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
        const products:productsdb[] = DataBase.connection(this.TABLE_NAME).select()
        return products.map((product)=>{
            return new Product(product.name,product.description,product.price)
        })
    }
}