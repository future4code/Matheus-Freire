import React from 'react'
import App from '../App'
import Nomes from './Nomes'
import axios from 'axios'
export default class Fabricantes extends React.Component{
    state={
        telaAtual:'fabricantes',
        fabricantes:[]
    }
    componentDidMount(){
        this.getMissions()
    }
    onClickPrincipal=()=>{
        this.setState({telaAtual:'principal'})
      }
    getMissions=()=>{
        axios.get("https://api.spacexdata.com/v3/missions")
        .then((res)=>{
            console.log(res.data)
            this.setState({fabricantes:res.data})
        })
    }
      
    render(){
       console.log(this.state.fabricantes)
        const listaFabricantes=this.state.fabricantes.map((mission)=>{
            return( 
                <div key={mission.mission_id}>
                    <p>{mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}   </p>
                    <hr/>
                </div>
            )
        })
        return(
            <div>
                {this.state.telaAtual==="fabricantes" ?  <div><button onClick={this.onClickPrincipal}>voltar Tela Principal</button>
                <h2>Lista de Fabricantes de naves na SpaceX</h2>
                {listaFabricantes}</div> 
                :
                 this.state.telaAtual==="principal"? <App/>:<div></div> }
               
            </div>
        )
    }
}