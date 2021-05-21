function calculaPrecoTotal(quantidade) {
  let calculo
  if(quantidade<12){
    calculo=1.30*quantidade
  }else{ 
    calculo=1*quantidade
  }
  return calculo
}