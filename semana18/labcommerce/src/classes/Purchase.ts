import { Product } from "./Product"
import { User } from "./User"

export class Purchase {
    id?:number
    name:string
    description:string
    price:number
    constructor(name:string,description:string,price:number){
        this.name=name,
        this.description=description,
        this.price=price
    }
}