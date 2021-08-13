import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import useRequestData from './hooks/useRequestData'
import { Play } from './function/Play'
import "./App.css";

const App = () =>{
  const {cards,setCards,frontImage,backImage} =useRequestData([], 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json')
  const [turnCards,setTurnCards]=useState('front')
  const [oneCard,setOneCard]=useState([])
  const [imagem,setImagem]=useState('')
  const [turnOneCards,setTurnOneCards] = useState('back')
/*----------------------------- início Lógica para começar o jogo e embaralhar as cartas ------------*/
  const playGame = (x)=>{
      setTurnCards(x)
      Play(cards,setCards)
  }  
  /*----------------------------- fim Lógica para começar o jogo e embaralhar as cartas ------------*/

/*----------------------------- Início Lógica para virar uma carta ------------*/  
  const turnOneCard = (name,image) =>{
      setOneCard(name)
      setImagem(image)
      setTurnOneCards('front')
  }
  /*----------------------------- Fim Lógica para virar uma carta ------------*/  

  /*----------------------------- Iniício Lógica para voltar  carta ------------*/  
  const turnCardBack=()=>{
    setTurnOneCards('back')
  }
  /*----------------------------- Fim Lógica para virar uma carta ------------*/  

  /*----------------------------- newlist = cartas com uma virada escolhida pelo usuário ------------*/  
  const newlist = cards.map((x)=>{
    if(oneCard===x.name){
      return (
        <div className='card-text'>
            <img onClick={turnCardBack} src= {`${frontImage}${imagem}`}/>
            <h4>{oneCard}</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      )
    }
    else{
      return <img onClick={turnOneCard}  src= {`${backImage}`}/>
    }
}) 
  return(
    <div className='body'>
       {turnCards==='front' ? <button onClick={()=>playGame('turn')}>Iniciar o jogo!!</button>: <button onClick={()=>playGame('front')}>Ver Cartas!</button>}
    <div className='Container'>
      {turnOneCards==='back' ? cards.length>0 && cards?.map((x)=>{
     return(
       <div>
         {turnCards==='front' ? <div> <img src={`${frontImage}${x.image}`} />
         </div>:<img onClick={()=>turnOneCard(x.name,x.image)} src={backImage}/> }
       </div>
     )
 }): newlist}
    </div>
    </div>
  )
}
export default App