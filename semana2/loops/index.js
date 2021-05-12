//---------------------------->Exercícios de interpretação de código<---------------------

//-------->exercício 1
/*

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
  
}
console.log(valor)

// o código está tendo um novo valor até que i seja menor que 4. Na tela irá aparecer o valor de 10
*/

//-------->exercício 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
		console.log(numero)
	}
console.log(numero)
}
//Letra a) Vai aparecer na telas todos os números maiores que 18 ou  seja 19, 21, 23, 25, 27, 30.
//letra B) dúvida

*/
//-------->exercício 3
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

//---------------------------->Exercícios de escrita de código<---------------------
//-------->exercício 1
/*
let quantidadeDeBichos = Number(prompt('Quantidade de animais de estimação voce tem?'))
if(quantidadeDeBichos === 0){
    console.log('Que pena! voce pode adotar um pet')

}
else{
    let array =[]
    for(let i=1; i<=quantidadeDeBichos; i++){
        let nomes=prompt("digite nomes")
        array.push(nomes)
        
    }
    console.log(array)
}
*/
//-------->exercício 2


// letra A)
/*
let arrayOriginal = [10,20,25,26]
function imprimeArray(){
   novoArray=[]
  for(let i=0; i<arrayOriginal.length ; i++){
    novoArray= arrayOriginal[i]

    console.log(novoArray)
  }
}
imprimeArray()
*/
// letra B)
/*
let arrayOriginal = [10,20,25,26,40]
function imprimeArray(){
  novoArray=[]
  for(let i=0; i<arrayOriginal.length; i++){
    novoArray=arrayOriginal[i]/10
    console.log(novoArray)
  }
}
imprimeArray()
*/

//Letra C)
/*
let arrayOriginal = [10,20,25,26,40]
function imprimeArray(){
  let novoArray=[]
  let numeroPar
  for(let i=0; i<arrayOriginal.length; i++){
    
    if(arrayOriginal[i]%2===0){
       numeroPar=arrayOriginal[i]
       novoArray.push(numeroPar)
    }
  }

  console.log(novoArray)
}
imprimeArray()
*/
//Letra d) --dúvida

//Letra e)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
function imprimeArray(){
  let maiorNumero=0
  let menorNumero = Number.POSITIVE_INFINITY
  for(let i=0; i<arrayOriginal.length ; i++){
    if(arrayOriginal[i]>maiorNumero){
      maiorNumero=arrayOriginal[i]
      
    }
    if((arrayOriginal[i]<maiorNumero){
      menorNumero=arrayOriginal[i]
      }
    }
    console.log(`O menor numero é ${menorNumero} e o maior número é ${maiorNumero}`)
  }
 

imprimeArray()