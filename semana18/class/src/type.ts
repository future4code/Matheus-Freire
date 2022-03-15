// export type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

//2)

  export class Transaction {
   private description: string
    private value: number
    private date: string
    constructor(userDescription:string,userValue:number, userDate:string){
        this.description=userDescription
        this.value=userValue
        this.date=userDate
    }
    getDescription():string{
        return this.description
    }
    getValue():number{
        return this.value
    }
    getDate():string{
        return this.date
    }
  }
  const transacao = new Transaction("dsjcjsj",25,"17/02/9999")
  console.log(transacao.getDate())

 