import { Product } from "./Product"
import { User } from "./User"

export class Purchase  {
    product_id:number
    user_id: number
    quantity:number
    totalPrice:number
    constructor(product_id:number,
        user_id: number,
        quantity:number,
        totalPrice:number){
            this.product_id=product_id
            this.user_id=user_id
            this.quantity=quantity
            this.totalPrice=totalPrice
        }
}