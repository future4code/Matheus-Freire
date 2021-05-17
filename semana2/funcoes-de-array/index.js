//----------------------------> Exercícios de interpretação de código <----------------------

//------------->Exercício 1
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  // Vai aparecer no console o nome e sobrenome de cada uma e também a posicao do array de cada uma 
*/
  //------------->Exercício 2
/*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
*/
  // Neste caso vai aparecer um array so com o nome. ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

  //------------->Exercício 3
/*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  //Neste caso só vai aparecer no console o nome e apelido daqueles que não tem "chijo". {nome: "Amanda Rangel", apelido: "Mandi"}
// {nome: "Laís Petra", apelido: "Laura"}
*/

//----------------------------> Exercícios de escrita de código <----------------------
//letra a)
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomeDogs = pets.map((nomePet)=>{
     console.log(nomePet.nome)

 })
 */

 //letra B)
 /*
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const cachorrosSalsicha = pets.filter((nomeERaca)=>{
     return nomeERaca.raca === "Salsicha"

 })
 console.log(cachorrosSalsicha)
 */

 //Letra c)
 /*
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const poodle = pets.filter((tipo)=>{

    return tipo.raca==="Poodle" 

}).map((tipo)=>{
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${tipo.nome}`)
})
*/

//------------->Exercício 2

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//letra A
/*
const nomeProduto = produtos.map((produto)=>{
  console.log(produto.nome)
})
//letra B)
const descontos= produtos.map((desconto)=>{
  desconto.preco=desconto.preco*95/100
  console.log(desconto)
  
})

//letra C)
const Bebidas = produtos.filter((tipo)=>{
  return tipo.categoria==="Bebidas"
})
console.log(Bebidas)


//letra D)
const arrayYpe = produtos.filter((ype)=>{
  return ype.nome.includes("Ypê")
})
console.log(arrayYpe)


//Letra E)

const frases= produtos.filter((frase)=>{
  return frase.nome.includes("Ypê")
}).map((frase)=>{
  console.log(`compre ${frase.nome} por ${frase.preco}` )
})
/*