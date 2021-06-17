import React from 'react'
import styled from 'styled-components'
import App from '../App'
const Dividir = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1%;
`
const Borda=styled.div`
    border: 1px solid black;
`
const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
const headers = {
    headers:{
      Authorization: "matheus-pimentel-molina"
    }
  }
export default class Usuarios extends React.Component{
    state={
        trocaTela:false
    }

    onClickTroca=()=>{
        this.setState({trocaTela:!this.state.trocaTela})
    }
    excluirUsuario=()=>{
        const iden= this.props.arrayNomes.map((nome)=>{
            return nome.id
        })
         
        
       console.log(iden,"id")
      }
      
render(){
    this.excluirUsuario()
    const componentesArray = this.props.arrayNomes.map((nome)=>{
        return (
            <Dividir>
            <li key={nome.id}>{nome.name}</li>
            <button>Deletar</button>
            </Dividir>
          
          )
      })
        return(
            <div>
                {this.state.trocaTela? <App/> : <div> 
                                                <button onClick={this.onClickTroca}>voltar tela</button>
                                                <Borda>
                                                {componentesArray}
                                                </Borda></div>}
               
            </div>
           
        )
    }
}