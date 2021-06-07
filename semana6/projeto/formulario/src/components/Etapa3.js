import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class Etapa3 extends React.Component{
    state={
        motivo:""
    }
    onChangeMotivo=(evento)=>{
        this.setState({motivo: evento.target.value })
    }
    render(){
        return(
            <Container>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input
                value={this.state.motivo}
                onChange={this.onChangeMotivo}
                />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
            </Container>
        )
    }
}