import styled from 'styled-components'
import axios from 'axios'
import React from 'react'
import Usuarios from './components/Usuarios'
const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-top: 5%;
  margin-right: 40%;
  margin-left: 40%;
`
const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers:{
    Authorization: "matheus-pimentel-molina"
  }
}

export default class App extends React.Component{
  state={
    inputEmail:"",
    inputName:"",
    arrayNomes:[],
    trocaTela: false
  }
  
  componentDidMount(){
    this.pegarUsuario()
  }
  onChangeEmail=(evento)=>{
    this.setState({inputEmail:evento.target.value})
  }
  onChangeNome=(evento)=>{
    this.setState({inputName:evento.target.value})
  }
  pegarUsuario=()=>{
    axios.get(url,headers)
    .then((resposta)=>{
      console.log(resposta.data)
      this.setState({arrayNomes:resposta.data})
    })
    .catch((err)=>{
      
    })
  }
  /*adicionarUsuario=()=>{
    const body={
      name:this.state.inputName,
      email:this.state.email
    }
    axios.post(url,body,headers)
    .then(()=>{
      alert("Nome adicionado com sucesso")
      this.setState({inputName:""})
      this.pegarUsuario()
    })
  }
  */
  criarUsuario=()=>{
    const body={
     name:this.state.inputName,
      email:this.state.inputEmail
    }
    axios.post(url,body,headers)
    .then(()=>{
      alert("playlist cadastrada com sucesso")
      this.setState({inputName:""})
      this.pegarUsuario()
    })
    .catch((err)=>{
      console.log(err.response.data)
    })
  }
  onClickTroca=()=>{
    this.setState({trocaTela:!this.state.trocaTela})
  }
  render(){
  /*const componentesArray = this.state.arrayNomes.map((nome)=>{
    return (
      <li key={nome.id}>{nome.name}</li>
      )
  })*/
  
    return(
      <div>
         {this.state.trocaTela? <Usuarios arrayNomes={this.state.arrayNomes}/> :<div> <button onClick={this.onClickTroca} >Ir para página de lista </button>
     
        <Container>

        <label>Nome</label>
        <input value={this.state.inputName} onChange={this.onChangeNome}/> 
        <label >E-mail</label>
        <input value={this.state.inputEmail} onChange={this.onChangeEmail} /> 
        <button onClick={this.criarUsuario}>Salvar</button>
      </Container>
      
      </div>
         }
     </div>
    )
  }
}
