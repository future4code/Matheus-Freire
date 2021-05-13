//---------->Exercícios de interpretação de código<---------
// -->exercício 1<-----
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) //"Virginia Cavendish"
console.log(filme.transmissoesHoje[2])//{canal: "Globo", horario: "14h"}
*/

// -->exercício 2<-----
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // nome: "Juba", , idade: 3, raca: "SRD"
console.log(tartaruga)//nome: "Jubo", , idade: 3, raca: "SRD"

//Letra b) a sintaxe ...  é a cópia inteira de um objeto para outro

*/

// -->exercício 3<-----
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))// false
console.log(minhaFuncao(pessoa, "altura"))// undefined

//Letra b) o valor false é porque quando chama a função e depois entra no objeto backender vai aparecer o valor dele que é false
// já na segunda não tem o objeto altura, por isso é undefined

*/

//---------->Exercícios de escrita de código<---------

// -->exercício 1<-----
// Letra a)
/*
const pessoa = {
    nome: 'Amanda',
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
console.log(`Meu nome é ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]},${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)
*/

// letra B
/*
const pessoa = {
    nome: 'Amanda',
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const pessoa2 = {
    ...pessoa,
    apelidos:["moe",'pimentel','teus']
}
console.log(pessoa2)
console.log(`Meu nome é ${pessoa2.nome}, mas pode me chamar de ${pessoa2.apelidos[0]},${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]} `)
*/

// -->exercício 2<-----
/*

const pessoa1 = {
    nome: 'Matheus',
    idade: 26,
    profissao: 'estudante'
}
const pessoa2 = {
    nome: 'Gabriel',
    idade: 22,
    profissao: 'veterinário'

}
function minhaFuncao(pessoa) {
    let array = [pessoa.nome,pessoa.nome.length,pessoa.idade,pessoa.profissao,pessoa.profissao.length]
    return array
}
console.log(minhaFuncao(pessoa2))
*/

// -->exercício 3<-----

let carrinho=[]
    const funcao1 = {
        fruta: 'banana',
        disponivel: 'true'
    }
    const funcao2 = {
        fruta: 'Maçã',
        disponivel: 'false'
    }
    const funcao3 = {
        fruta:' goiaba',
        disponivel:'true'
    }
    function objeto(funcao) {
      carrinho=[funcao1,funcao2,funcao3]
      console.log(carrinho)
      
      
      
    }
 objeto(funcao1)
    