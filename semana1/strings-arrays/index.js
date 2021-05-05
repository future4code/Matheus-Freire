//-------------------->Exercícios de interpretação de código<------------------

//Exercício 1
/*
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array)// no lugar do 1 aparecerá 19

const valor = array[i+6]
console.log('f. ', valor)// 9
*/

//Exercício 2
/*
const frase = prompt("Digite uma frase") //Subi num ônibus em Marrocos

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// SUBI NUM ONIBUS EM MIRROCOS 27 - O Programa passa tudo para maiúsculo e depois troca a letre "A " por "I"
*/

//------------------------>Exercícios de escrita de código<--------------------

//Exercício 1
/*
const nome = prompt("digite seu nome")
const email = prompt("digite seu e-mail")
console.log("O seu e-mail ", email,"foi cadastrado com sucesso.","Seja bem vinda(o),",nome,"!")
*/

//Exercício 2
/*
const comidasFavoritas = ['Lasanha','Pizza','Macarrão','Batata-Frita','Hamburguér']
console.log(comidasFavoritas)
const comidasFavoritas2 = [
'Lasanha',
"Pizza",
"Macarrão",
"Batata-Frita",
"Hamburguér"
]
console.log("Essas são minhas comidas preferidas",comidasFavoritas2)
let comidaFavoritaUsuario = prompt("Digite sua comida favorita")
comidasFavoritas.splice(1,1,comidaFavoritaUsuario)
console.log(comidasFavoritas)
*/

//Exercício 3

const listaDeTarefas = []
let tarefa1 = prompt("digite sua tarefa 1")
let tarefa2 = prompt("digite sua tarefa 2")
let tarefa3 = prompt("digite sua tarefa 3")
listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(listaDeTarefas)
const tarefaExecutada = prompt("Digite 0,1 ou 2 para a tarefa já executada")
listaDeTarefas.splice(tarefaExecutada,1)
console.log(listaDeTarefas)

 
