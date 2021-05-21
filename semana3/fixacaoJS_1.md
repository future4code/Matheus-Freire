~~~ function calculaSalario(carrosVendidos, valorVendas) {
  
	let calculo1=carrosVendidos*100 // descobrir quanto ganhou por carro vendido
  
	let calculo2 = valorVendas*5/100 //descobrir quanto ganhou de acordo com a porcentagem
  
	let valorFinal = 2000+calculo1+calculo2
  
	return valorFinal

}