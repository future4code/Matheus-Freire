import axios from 'axios'
import Detalhes from './Detalhes'
import React from 'react'
import styled from 'styled-components'
import App from '../App'
const Dividir = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class Usuarios extends React.Component{
    state={
        trocaTela:false,
        telas: "usuarios",
        ident:''

    }
   trocarTelas=()=>{
        switch(this.state.telas){
            case "usuarios":
            return <Usuarios/>
            case "detalhes":
                return <Detalhes/>
            default:
                return <div>Erro! Página não encontrada :(</div>
        }
   }
    onClickTelas=(id)=>{
        this.setState({telas: "detalhes"})
        this.setState({ident:id})
    }
    onClickTroca=()=>{
        this.setState({trocaTela:!this.state.trocaTela})
       
    }
    deletarUsuario = (id) => {
        const resposta=prompt('tem certeza disso?').toLowerCase()

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        if(resposta==="sim"){
            axios.delete(url, {
                headers: {
                    Authorization: "matheus-pimentel-molina"
                }
            })
                .then((res) => {
                    alert("Usuário(a) deletado(a) com sucesso!")
                    this.props.pegarUsuario()
                    
                })
                .catch((err) => {
                    alert("Ocorreu um erro, tente novamente")
                    console.log(err.response.data)
                })
        }else(alert("usuário não deletado"))
        
    }
    render(){
   
            let componentesArray = this.props.arrayNomes.map((nome)=>{
        return (
            <div>
             <Dividir key={nome.id}>
            <p onClick={()=>this.onClickTelas(nome.id)}>{nome.name } </p> 
             <button onClick={() => this.deletarUsuario(nome.id)}>Deletar</button>
             </Dividir> 
                
            </div>
           
          )
      })

      
        return(
             <div> 
              {this.state.trocaTela? <App/> : this.state.telas === "detalhes" ? <Detalhes id={this.state.ident} /> :
                <div> 
                                                <button onClick={this.onClickTroca}>voltar tela</button>
                                                <div>
                                                {componentesArray}
                                                </div></div>}
               
            </div>
            
           
        )
    }
}