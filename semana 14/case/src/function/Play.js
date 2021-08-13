
export const Play = (cards,setCards)=>{
    let array = []
    for (let indice = cards.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
     const elemento = cards[indice - 1];
     array.push(elemento)  
  }
  setCards(array)
}