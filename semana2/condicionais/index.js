//------------------->Exercícios de interpretação de código<---------------------------

//---->exercicio 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//letra A ) O usuário ao digitar um numero ele entra na primeira condicao 'if' se ele der resto zero vai aparecer no console 'passou no teste', caso contrario vai aparecer ' não passou'
// letra B) Para todos os numeros pares ele vai retornar " Passou no teste"
//letra C) Para todos os numeros impares ele vai retornar " Não passou no teste".
*/

//---->exercicio 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Letra A) o programa serve para aparecer no console o valor da fruta digitada pelo usuário.
//Letra B) O preço da fruta Maça é R$ 2,25.
// letra C) Se retirarmos o break o valor da pêra que vai aparecer so console é 5.
*/

//---->exercicio 3
/*

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//Letra A) A primeira linha está transformando o numero que é entendida pelo prompt como string em número.
//letra B) Se o usuário digitar 10 vai aparecer a mensagem "esse número passou no teste" pois ele é maior que 0. Já se digitar -10, vai aparecer apenas a mensagem de erro, pois nao tem outra condição para caso o numero seja menor que zero.
//letra C) Haverá um erro no console avisando que a variavél mensagem não foi declarada. Isso ocorre porque o escopo do filho não compartilha informacoes com o escopo global.
*/

//------------------->Exercícios de escrita de código<---------------------------

//---->exercicio 1
/*
let idadeUsuario = Number(prompt('Qual sua idade'))
if(idadeUsuario>=18){
    console.log("Você pode dirigir")
}
else{
    console.log('Você não pode dirigir!')
}
*/
//---->exercicio 2
/*

let turno = prompt(' Digite M para matutino, V para vespertino OU N para noturno').toUpperCase()

if(turno==='M'){
    console.log('Bom dia!')
}
else if(turno==='V') {
    console.log('Boa tarde')

}
else{
    console.log('Boa noite')

}
*/
//---->exercicio 3
/*
let turno = prompt(' Digite M para matutino, V para vespertino OU N para noturno').toUpperCase()
switch(turno){
    case 'M':
    console.log("Bom dia")
    break
    case 'V':
        console.log('Boa tarde')
        break
        default:
            console.log('Boa noite')
}
*/
//---->exercicio 4
/*
let generoFilme = prompt("digite o gênero do filme").toLowerCase()
let precoFilme = Number(prompt('digite o preço do ingresso'))

if(generoFilme==='fantasia' && precoFilme<15){
  console.log("Bom filme")
}
else{
  console.log('Escolha outro filme')
}
*/


//------------------------> Desafios<------------------------

//Exercicio 1
/*
let generoFilme = prompt("digite o gênero do filme").toLowerCase()
let precoFilme = Number(prompt('digite o preço do ingresso'))

if(generoFilme==='fantasia' && precoFilme<15){
  let lanche = prompt('Qual snack que você quer comprar?')
  console.log("Bom filme")
  console.log(`Aproveite seu ${lanche}`)
}
else{
  console.log('Escolha outro filme')
}
*/

//Exercício 2

let nomeUsuario= prompt('Digite seu nome')
let tipoDeJogo = prompt(" digite IN para jogo internacional ou DO para jogo doméstico").toLowerCase()
let etapaDoJogo = prompt("digite SF para semi-final, DT para terceiro lugar ou FI para final").toLowerCase()
let categoria = prompt('digite a categoria 1,2,3 ou 4')
let quantIngressos=Number(prompt('qual quantidade de ingressos será comprada?'))
console.log("nome:",nomeUsuario)
console.log('tipo De Jogo:',tipoDeJogo)
console.log('Categoria:',categoria)
console.log('Quantidade de ingressos:',quantIngressos)
if(tipoDeJogo==='nacional' && etapaDoJogo=== 'semifinal' && categoria===1){
  console.log
}
  