//Exercício 1

function inverteArray(array){
   for(let i=0; i<array.length;i++){
  
       array[i]=array[array.length-1-i]
       
   }
   return array
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let calculo
   for(let i=0; i<array.length;i++){
      if(array[i]%2!==0){
       array.splice(i,1)
      }
      calculo=Math.pow(array[i],2)
      array[i]=calculo
   }
   return array
   }
   


//Exercício 3

function retornaNumerosPares (array) {
   let novoArray=[]
   for(let i=0;i<array.length;i++){
      if(array[i]%2===0){
         let numeroPar=array[i]
         novoArray.push(numeroPar)
      }
   }
   return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero=0
   for(i=0;i<array.length;i++){
      if(array[i]>maiorNumero){
         maiorNumero=array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 // true
 const booleano4 = !booleano3 //false
 let respostas=[booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3,(booleano2 || booleano3) && (booleano4 || booleano1),!(booleano2 && booleano3) || !(booleano1 && booleano3),!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
   return respostas
 }


//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let tipoTriangulo
  if(a===b && b===c){
     tipoTriangulo= "Equilátero"
  }
  else if(a===b && b!==c || b===c && a!==c){
     tipoTriangulo ="Isósceles"
  }else if(a!==b && b!==c & a!==c){
     tipoTriangulo ="Escaleno"
  }
  return tipoTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero
   let maiorDivisivelporMenor
   let diferenca
   if(num1>num2){
      maiorNumero=num1
      maiorDivisivelporMenor= num1%num2===0
      diferenca=num1-num2

      }else{
      maiorNumero=num2
      maiorDivisivelporMenor= num2%num1===0
      diferenca=num2-num1
      }return {maiorNumero,maiorDivisivelporMenor, diferenca}
   }


// Exercício 10

function segundoMaiorEMenor(array) {
   let novoArray=[]
   let maiorNumero=0
   let menorNumero=Infinity
   let segundoMaior
   let segundoMenor
   for(let i=0;i<array.length;i++){
      if(array[i]>maiorNumero){
         maiorNumero=array[i]
         
      }else{menorNumero=array[i]}
   }
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   let nome = 'O Diabo Veste Prada'
   let ano=2006
   let diretor='David Frankel'
   let atores=["Meryl Streep", "Anne Hathaway", 'Emily Blunt', 'Stanley Tucci']
   return {nome,ano,diretor,atores}
}

// Exercício 13

function imprimeChamada() {
   const objeto ={
    nome : 'O Diabo Veste Prada',
    ano: 2006,
    diretor : 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]} n.`
  
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let largura = lado1
   let altura = lado2
   let perimetro = 2 * (lado1 + lado2)
   let area = lado1 * lado2
      return {largura,altura,perimetro,area}
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  return {...pessoa,nome: " ANÔNIMO "}
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novoArray=arrayDePessoas.filter((maior18)=>{
      return maior18.idade >= 20
   })
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray=arrayDePessoas.filter((menores20)=>{
      return menores20.idade < 20
   })
   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let multiplicador
   const novoArray=array.map((numeros)=>{
      multiplicador= numeros*2
      return multiplicador
   })
   return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let multiplicador
   const novoArray=array.map((numeros)=>{
      multiplicador= numeros*2
      
      return multiplicador.toString()
   })
   return novoArray
}


// Exercício 17, letra C

function verificaParidade(array) {
   let numeroPar
   let numeroImpar
   const novoArray=array.map((numeros)=>{
      if(numeros%2===0){
         numeroPar = `${numeros} é par`
      }else{numeroImpar=`${numeros} é impar`}
      return numeroPar, numeroImpar
   })
   return novoArray
}


// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}