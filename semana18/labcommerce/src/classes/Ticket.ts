

export class Ticket{
    id?:number
    name:string
    description:string
    price:number
    origin: string
    destiny:string
    constructor(name:string,description:string,price:number,origin:string,destiny:string){
        this.name=name,
        this.description=description,
        this.price=price
        this.origin=origin
        this.destiny=destiny
    }
}