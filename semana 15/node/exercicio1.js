const nome = process.argv[2]
const idade = Number(process.argv[3])

if(nome && !idade || !nome && idade ){
    console.log('Esperava 2 parâmetros só recebi um.')
}

else if(nome && idade){
    console.log(`Olá, ${nome}! você tem ${idade} anos`)
    console.log(`Olá, ${nome}! você tem ${idade} anos. Em sete anos você terá ${idade+7}`)
}
module.exports = nome
module.exports = idade