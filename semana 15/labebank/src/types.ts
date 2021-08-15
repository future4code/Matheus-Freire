export type transaction = {
    valor:number,
    date:Date,
    description:string
}

export type Conta ={
    name: string,
    CPF:string,
    date:Date,
    saldo:number,
    balance: Array <transaction>
}