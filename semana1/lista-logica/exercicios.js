// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}
console.log(soma(3,3))
// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   let altura = Number(prompt('Digite a altura'))
   let largura = Number(prompt('Digite a largura'))
   areaRetangulo=altura*largura
   console.log(areaRetangulo)
}


//Exercício 2

function imprimeIdade() {
   let anoAtual = Number(prompt("digite qual o ano atual"))
   let  anoDeNascimento = Number(prompt("qual seu ano de nascimento"))
   let idade = anoAtual-anoDeNascimento
   console.log(idade)
}

//Exercício 3

function calculaIMC(peso, altura) {
   return peso/(altura*altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   let nome = prompt('Digite seu nome')
   let idade = prompt('Digite sua idade')
   let email = prompt('digite seu email')
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   let cor1 = prompt("digite cores favoritas")
   let cor2 = prompt("digite cores favoritas")
   let cor3 = prompt("digite cores favoritas")
   let array=[cor1,cor2,cor3]
   console.log(array)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula('oi'))

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   let paraNaoDarPreju = custo/valorIngresso
   return paraNaoDarPreju
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   
  return string1.length === string2.length
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   let tamanhoArray = array.length
   let ultimoElemento=array[tamanhoArray-1]
   return ultimoElemento
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
  let tamanhoDoARRAY=array.length
  let ultimoElemento=array[tamanhoDoARRAY-1]
  let primeroElemento=array[0]
  array[0]=ultimoElemento
  array[tamanhoDoARRAY-1]=primeroElemento
  return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
         return string1.toUpperCase()===string2.toUpperCase()

}

// Exercício 13

function checaRenovacaoRG() {
   let anoAtual=Number(prompt('Digite o ano atual'))
let anoDeNascimento=Number(prompt('Digite o ano que sua carteira foi emitida'))
let anoCarteiraDeIdentidade=Number(prompt('digite quando tirou seu RG'))

let idade = anoAtual-anoDeNascimento
let renovar=anoAtual -anoCarteiraDeIdentidade
let resultado=(idade<21 && renovar>4) || ((idade>20 && idade<50) && renovar>9) ||(idade>49 && renovar>14)

console.log(resultado)  
  
}

// Exercício 14

function checaAnoBissexto(ano) {
   let teste1=ano%400===0
   let teste2=ano%4===0 
   return ano%400===0 && ano%4===0
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   let pergunta1 = prompt("Voce tem mais de 18 anos?")
   let  pergunta2 = prompt("você possui ensino médio completo?")
   let pergunta3= prompt("voce possui disponibilidade exclusiva para fazer o curso?")
   console.log(pergunta1==='sim' && pergunta2==='sim' && pergunta3=="sim")
}