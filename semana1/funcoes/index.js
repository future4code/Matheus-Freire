//-----------------------------Exercícios de interpretação de código-----------------------

//-----> Exercicio 1<-----
 // letra A
/*
 function minhaFuncao(variavel) { 
	return variavel * 5
}

console.log(minhaFuncao(2))//Resposta = 10
console.log(minhaFuncao(10))// resposta = 50
*/

///Letra B
/*
function minhaFuncao(variavel) { 
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
Resposta: não vai aparecer nada no console porque não tem um console.log.
*/

//-----> Exercicio 2<-----

// Letra a
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

Resposta: a função vai retornar apenas true e ou false, quando tiver cenoura no texto é true e quando não é false

// letra B
     i. Eu gosto de cenoura // true
     ii.  CENOURA é bom pra vista // true
     iii. Cenouras crescem na terra // true

     */

//-----------------------------Exercícios de escrita de código-----------------------

//-----> Exercicio 1<-----

/*
////Letra A
function fraseSobreMim(){
    console.log('Eu sou o Matheus, tenho 26 anos, moro em Governador Valadares e sou estudante')
}
fraseSobreMim()
*/

////letra B
/*

function fraseSobreMim(nome,idade,cidade,profissao){
    console.log('eu sou o',nome,',tenho',idade,'anos',',moro em ',cidade,'e sou',profissao)
}

fraseSobreMim("Matheus",26,"valadares","estudante")
*/

//-----> Exercicio 2<-----

//Letra A
/*
function numeros(num1,num2){
    return num1+num2
}
console.log(numeros(3,2))
*/

//Letra B
/*
function numeros(num1,num2){
    return num1>=num2
}
console.log(numeros(5,6))
*/

//Letra C

/*
function numero(num1){
    let calculo=num1%2
    return calculo===0
}
console.log(numero(2))
*/

//Letra D
/*
function mensagem(frase){
    
    let fraseMinuscula = frase.toLowerCase()
    console.log(frase.length)
    console.log(fraseMinuscula)
    
}
mensagem('Eu SOU FORMADO EM ENGENHARIA')
*/

//-----> Exercicio 3<-----

function operaçoessoma(soma){
     return number1+number2
}    
function operacoesBasicas2(subtracao){
     return subtracao=number1-number2
}
function operacoesBasicas3(multiplicacao){
       return number1*number2
}
function operacoesBasicas4(divisao){
    return number1/number2
}
let number1 = Number(prompt("digite o primeiro numero"))
let number2 = Number(prompt("digite o segundo numero"))
console.log("Numeros inseridos:",number1,'e', number2)
let resposta1=operaçoessoma(number1,number2)
let resposta2=operacoesBasicas2(number1,number2)
let resposta3=operacoesBasicas3(number1,number2)
let resposta4=operacoesBasicas4(number1,number2)
console.log('soma:',resposta1)
console.log('diferença:',resposta2)
console.log('multiplicação:',resposta3)
console.log('divisão:',resposta4)

