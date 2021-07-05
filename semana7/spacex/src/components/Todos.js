import React from 'react'
import App from '../App'
import axios from 'axios'
import Nomes from './Nomes'
export default class Todos extends React.Component{
    state={
        telaAtual:'todos',
        array:[],
        id: ''
        
    }
    onClickNomes=(id)=>{
        this.setState({telaAtual: 'nomes', id: id})
        
    }
    onClickPrincipal=()=>{
        this.setState({telaAtual:'principal'})
      }
      componentDidMount(){
          this.getEvery()
      }
    getEvery=()=>{
        axios.get("https://api.spacexdata.com/v3/missions")
        .then((res)=>{
            this.setState({array:res.data})
        })
    }
    render(){
        console.log(this.state.array)
       const lista=this.state.array.map((tudo)=>{
            return( <div key={tudo.id}>
                    <p onClick={()=>this.onClickNomes(tudo.twitter)}> Missão:{tudo.mission_name}</p>
                    <p> Website: {tudo.website}</p>
                    <a href={tudo.wikipedia} target="_blank">clique aqui para saber de nossa história</a>
                    <hr/>
            </div>)
       })
        return(
            <div>
                {this.state.telaAtual==='principal'? <App />: this.state.telaAtual==='nomes'? <Nomes id={this.state.id}/>:  
                                                        
                                                        <div>
                                     <button onClick={this.onClickPrincipal}>Voltar tela inicial</button>
                                    {lista}
                                                            </div>}
                
            </div>
        )
    }
}