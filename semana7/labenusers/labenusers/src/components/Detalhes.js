import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Usuarios from './Usuarios'

export default class Detalhes extends React.Component{
    state={
        telas:"detalhes",
        userName:'',
        userEmail:'',
    
    }
    adicionarEmail=()=>{
       
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`
        axios.get(url, {
            headers: {
                Authorization: "matheus-pimentel-molina"
            }
        })
        .then((resposta)=>{
           console.log(resposta)
            this.setState({userName:resposta.data.name, userEmail:resposta.data.userEmail}) 
        })
            
            .catch((err) => {
                    console.log(err.response.data)
            
        })
   
}
    onClickTroca=()=>{
        this.setState({telas:"usuarios"})
    }
    render(){
        this.adicionarEmail
       console.log(this.state.userName,"nome")
        
       
        return(
            <div>
                {this.state.telas==='usuarios'? <Usuarios/> : <div> nome:{this.state.userName } <button onClick={this.onClickTroca}>Retornar para usuarios</button>
                </div>}
               
            </div>
        )
    }
}