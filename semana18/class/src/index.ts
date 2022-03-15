import app from "./app"
import { Transaction } from "./type";

app

//1
// a) construtor serve para receber a atualização de parâmetros dentro da classe, para chama-lo usamos constructor(){}
// b)
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    getCPF():string{
        return this.cpf
    }
    getName():string{
        return this.name
    }
    getAge():number{
        return this.age
    }
  
  }
//c) precisamos usar a função get para ter acesso a propriedades privadas
  const user = new UserAccount("114","matheus", 24)
  console.log(user.getCPF());
  console.log(user.getAge());

//2
    const transacao = new Transaction("dsjcjsj",25,"17/02/9999")
    console.log(transacao.getDate())
  //3

  export class Bank {
    private accounts:UserAccount[];
    constructor(accounts:UserAccount[]){
        this.accounts = accounts;
    }

}



