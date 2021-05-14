/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// -------------------------------------> Projeto Blackjack<-------------------------------
    /*console.log("Bem vindo ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")){
        function comprarCarta(){
          const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
          const naipes = ["♦️", "♥️", "♣️", "♠️"]
          let cartasSorteadas = [] // criei array para quando receber os valores no objeto , jogarem dentro desse array
          let valor
          for(let i=0; i<=3; i++){
            const numero = cartas[Math.floor(Math.random() * 13)]
            const naipe = naipes[Math.floor(Math.random() * 4)]
            if (numero === "A") {
                valor = 11
              } else if (numero === "J" || numero === "Q" || numero === "K") {
                valor = 10
              } else { 
                valor = Number(numero)
              }
              
                const carta = {
                texto: numero + naipe,
                valor: valor
             }
                
                cartasSorteadas.push(carta)
            
        }
        let somaValorCartasUsuarios=cartasSorteadas[0].valor+cartasSorteadas[1].valor
        let somaValorCartasComputador= cartasSorteadas[2].valor+cartasSorteadas[3].valor
        console.log(`Usuário - cartas : ${cartasSorteadas[0].texto} ${cartasSorteadas[1].texto} - pontuação ${somaValorCartasUsuarios}`)
        console.log(`Computador - cartas : ${cartasSorteadas[2].texto} ${cartasSorteadas[3].texto} - pontuação ${somaValorCartasComputador}`)
        function comparar(){
            if(somaValorCartasUsuarios>somaValorCartasComputador){console.log("Você ganhou")}
            else if(somaValorCartasUsuarios===somaValorCartasComputador){console.log("empatou")}
            else {console.log("computador ganhou")}
        }
          comparar()
          return cartasSorteadas
    }
    }
    else{console.log("O jogo acabou!!")}
    comprarCarta()

    */