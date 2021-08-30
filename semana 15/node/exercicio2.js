
const num1=Number(process.argv[3])
const num2=Number(process.argv[4])
const operacao = process.argv[2]

 if(operacao==='soma'){
     console.log(`soma= ${num1+num2}`)
 }
 else if(operacao==='sub'){
     console.log(`subtração= ${num1-num2}`)
 }
 else if(operacao==='mult'){
     console.log(`multiplicaçao = ${num1*num2}`)
 }
 else if(operacao==='div'){
     console.log(`div = ${num1/num2}`)
 }
