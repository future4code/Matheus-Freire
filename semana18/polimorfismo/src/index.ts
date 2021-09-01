import app from "./app"
import { Client } from "./classes/Client"
import { Commerce } from "./classes/Commerce"
import { Customer } from "./classes/Customer"
import { Place } from "./classes/Place"
import { User } from "./classes/user"

app

// const user = new User("1", "matheus@gmail","matheus","12345")
// console.log(user.password)

const customer = new Customer("1", "matheus@gmail","matheus","12345","12445677")
// console.log(customer)

//1 -a) Não é possível ver o password pos ele é privado e só teriamos acesso caso fizessemos um getPassword
//1-b) Apenas uma vez

//2 - a) O "Chamando o construtor da classe Customer" aparece uma vez
//2 - b) O "Chamando o construtor da classe User" aparece uma vez

//3 

console.log(customer.getName())
console.log(customer.getEmail())
console.log(customer.getCreditCard())

//a) não seria possível imprimir a senha atralada a essa instância, pois password é privado e teria que ter uma funcao get

//4 

console.log(customer.introduceYourSelf())

//------------------------------> Polimorfismo < ---------------------------------------//

const client:Client = {
    name:"matheus",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
      }
}

console.log(client.calculateBill())

// 1-a) é possicel ler todos pois todos são públicos

//2

const place = new Place("112344")
console.log(place.getCep())
//a) Não é possível criar uma uma constante de um elemento abstrato

const commerce = new Commerce(11111,"111111")
console.log(commerce.getCep())