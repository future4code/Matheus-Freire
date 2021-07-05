import React, {useState} from 'react'
import styled from 'styled-components'
import  {ListTripsPage } from './ListTripsPage'

const Imagem = styled.img`
    width: 30%;
    border-radius: 100%;
`
const Body = styled.div `
    background-color: hsl(0, 0%, 90%);
    margin-top: 0%;
   
`
export const HomePage = ()=>{
    const [tela,setTela] = useState('home')
    const trocaTela=()=>{
        setTela('viagem')
    }
    return(
        <div>
        <Body>   
           <h1>Labex</h1>
           <div>
               <Imagem src='https://thumbs.dreamstime.com/b/globo-da-terra-com-plano-no-estilo-liso-voo-vetor-ilustra-o-do-146334307.jpg'/>
               <button onClick={trocaTela}>Sou um viajante</button>
           </div>
           <div>
               <Imagem src='https://s1.static.brasilescola.uol.com.br/be/vestibular/notebook-ferramenta-trabalho-varios-profissionais-599844f1a665d.jpg' />
               <button>área administrativa</button>
           </div>
           {tela==='viagem' && <ListTripsPage/>}
        </Body>
        
        </div>
    )
}