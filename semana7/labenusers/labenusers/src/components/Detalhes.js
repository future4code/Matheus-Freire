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
    componentDidMount(){
        this.adicionarEmail()
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
            this.setState({userName:resposta.data.name, userEmail:resposta.data.email}) 
        })
            
            .catch((err) => {
                    console.log(err.response.data)
            
        })
   
}

    onClickTroca=()=>{
        this.setState({telas:"usuarios"})
    }
    render(){
console.log(this.state.telas)
        return(
            <div>
                {this.state.telas==='usuarios'? <Usuarios/> : this.state.telas==='detalhes'?  
                <div> <p>nome:{this.state.userName}</p> 
                <p>email:{this.state.userEmail}</p>
                <button onClick={this.onClickTroca}>Retornar para usuarios</button>
                </div>: <div></div>}
               
            </div>
        )
    }
}