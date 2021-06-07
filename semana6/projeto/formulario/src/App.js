import React from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Botao=styled.button`
margin-top: 5px;
`
export default class App extends React.Component{
  state={
    etapa:1
  }
  
  renderizaEtapa=()=>{
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
    }
  }
  irParaProximaEtapa=()=>{
    let contador=this.state.etapa + 1
    this.setState({etapa : contador})
  }
  render(){
    
    return ( 
      <Container>
          {this.renderizaEtapa()}
          <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
      </Container>
    )
  }
}