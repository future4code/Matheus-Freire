import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import './ListTrip.css'
const Imagem = styled.img`
    width: 70%;
    height: 70vh;
    border-radius: 100%;
`
const Body = styled.div `
    background-color: hsl(0, 0%, 90%);
    margin-top: 0%;
    height: 100vh;
   
`
const ImagemBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Separar = styled.div`
margin-top: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: ;
`
export const HomePage = ()=>{
    const history=useHistory()
    const irTelaViagens=()=>{
        history.push("/listTrips")
    }
    const irTelaAdm=()=>{
        history.push('/loginPage')
    }
    return(
        <div>
        <Body>   
           <h1 className='labex'>Labex</h1>
           <Separar>
           <ImagemBotao>
               <Imagem src='https://thumbs.dreamstime.com/b/globo-da-terra-com-plano-no-estilo-liso-voo-vetor-ilustra-o-do-146334307.jpg'/>
               <button className='botao' onClick={irTelaViagens}>Sou um viajante</button>
           </ImagemBotao>
           <ImagemBotao>
               <Imagem src='https://s1.static.brasilescola.uol.com.br/be/vestibular/notebook-ferramenta-trabalho-varios-profissionais-599844f1a665d.jpg' />
               <button className='botao' onClick={irTelaAdm}>Área administrativa</button>
           </ImagemBotao>
           </Separar>
        </Body>
        
        </div>
    )
}