import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export default class Etapa2 extends React.Component{
    state={
        curso:"",
        ensino:""
    }
    onChangeCurso=(evento)=>{
        this.setState({curso: evento.target.blue })
    }
    onChangeEnsino=(evento)=>{
        this.setState({ensino:evento.target.value})
    }
    render(){
        return(
            <Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input
                value={this.state.curso}
                onChange={this.onChangeCurso}
                />
                <p>6. Qual a unidade de ensino?</p>
                <input
                value={this.state.ensino}
                onChange={this.onChangeEnsino}
                />
            </Container>
        )
    }
}