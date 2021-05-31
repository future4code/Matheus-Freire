function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contador
    let novoArray=[]
for(let i=0;i<arrayDeNumeros.length;i++){
    if(arrayDeNumeros[i]===numeroEscolhido){
        contador=arrayDeNumeros[i]
        novoArray.push(contador)
    }
    else{
}
 return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
}