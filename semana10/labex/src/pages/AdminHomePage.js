import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components'
const Container =styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid black;
    margin-top: 2%;
    margin-left: 30%;
    margin-right: 30%;
    padding: 1%;
`
export const AdminHomePage = () =>{
    const [arrayViagens,isLoading,error]=useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips')
    

    const history = useHistory()
    const telaDetalhes = ()=>{
        history.push('/detalhesPage')
    }
    const voltarTelaInicial =()=>{
        history.push('/')
    }
    const telaLogIn = ()=>{
        history.push('/loginPage')
    }
    const telaCriarViagem = ()=>{
        history.push('/criarPage')
    }
    return(
        <div>
            
            <h1>pagina administrativa</h1>
            <button onClick={voltarTelaInicial}>voltar</button>
            <button onClick={telaLogIn}>Log-Out</button>
            <button onClick={telaCriarViagem}>Criar Viagem</button>
            {arrayViagens.map((nome)=>{
        return (
            <Container onClick={telaDetalhes} key={nome.id}>
                <h2>{nome.name}</h2>
                <button>Excluir</button>
            </Container>
            
        )
    })}
            
        </div>
    )
}
