//-------->Exercícios de interpretação de código<--------------
/*
//Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)// true

console.log("d. ", typeof resultado) // boolean

resposta: a. false
          b. false
          c. true
          d. boolean
*/

// Exercício 2
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)

Resposta: Ele está querendo somar os dois números digitados, porém quando se usa prompt o javascript entende como string, aparecera no console a junção do primeiroNumerosegundoNumero

*/
/*
//Exercício 3
Para resolver o exercício dois temos que:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)
*/

//-------->Exercícios de escrita de código<--------------

//Exercício 1
/*
let idade = Number(prompt('Qual sua idade?'))
let idadeAmigo = Number(prompt('qual idade do seu melhor amigo ou amiga?'))
console.log("Sua idade é maior que a do seu melhor amigo?", idade>idadeAmigo)
console.log('A diferença de idades é', idade-idadeAmigo)
*/

//Exercício 2

/*
let numeroPar1 = Number(prompt('digite um número par'))
console.log('o resto é',numeroPar1 % 2)
let numeroPar2 = Number(prompt('digite um número par'))
console.log('o resto é',numeroPar2 % 2)
let numeroPar3 = Number(prompt('digite um número par'))
console.log('o resto é',numeroPar3 % 2)
let numeroPar4 = Number(prompt('digite um número par'))
console.log('o resto é',numeroPar4 % 2)
let numeroPar5 = Number(prompt('digite um número par'))
console.log('o resto é',numeroPar5 % 2)

// resposta: sempre que se digitar um número par a resposta no console vai ser resto zero
// quando se digitar um número impar, vai aparecer no console sempre resto 1
*/

//Exercício 3
/*
let idadeUsuario = Number(prompt("Qual sua idade?"))
console.log("Idade do usuário em meses é ",idadeUsuario*12)
let resultado1=idadeUsuario*365
console.log("Idade do usuário em dias é ",resultado1)
console.log("Idade do usuário em horas é",resultado1*24)
*/

//Exercício 4

let primeiroNumero = Number(prompt('digite o primeiro número'))
let segundoNumero = Number(prompt('digite o segundo número'))
console.log("O primeiro numero é maior que segundo?",primeiroNumero>segundoNumero)
console.log("O primeiro numero é igual que segundo?",primeiroNumero===segundoNumero)
let resultado = primeiroNumero%segundoNumero
let comparar = resultado === 0
console.log("O primeiro numero é divisivel pelo segundo?",comparar)
let resultado2 = segundoNumero%primeiroNumero
let comparar2 = resultado2 ===0
console.log("O segundo número é divisível pelo primeiro?",comparar2)








