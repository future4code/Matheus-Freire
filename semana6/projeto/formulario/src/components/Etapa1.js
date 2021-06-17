import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export default class Etapa1 extends React.Component{

state={
    nome: "",
    idade:'',
    email: "",
}
onChangeNome=(evento)=>{
    this.setState({nome:evento.target.value})
}
onChangeIdade=(evento)=>{
    this.setState({idade:evento.target.value})
}
onChangeEmail=(evento)=>{
    this.setState({email:evento.target.value})
}
    render(){
        return(
            <Container>
                <h1>ETAPA 1 - Dados Gerais</h1>
                <p>1- Qual seu nome?</p>
                <input
                placeholder=""
                value={this.state.nome}
                onChange={this.onChangeNome}
                />
                <p>2-Qual sua idade?</p>
                <input
                placeholder=""
                value={this.state.idade}
                onChange={this.onChangeIdade}
                />
                <p>3- Qual seu e-mail?</p>
                <input
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
                <p>4-Qual sua escolaridade?</p>
                <select >
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino Superior incompleto</option>
                    <option>Ensino Superior completo</option>
                </select>
            </Container>
        )
    }
} 