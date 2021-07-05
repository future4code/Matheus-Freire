import React from 'react'
import axios from 'axios'
import Fabricantes from './components/Fabricantes';
import Nomes from './components/Nomes';
import Todos from './components/Todos';
export default class App extends React.Component {
  state={
    telaATual:"principal" 
  }
  onClickFabricantes=()=>{
    this.setState({telaATual:'fabricantes'})
  }
  onClickNomes=()=>{
    this.setState({telaATual:'nomes'})
  }
  onClickTodos=()=>{
    this.setState({telaATual:'todos'})
  }
  render(){
  return (
    <div className="App">
      {this.state.telaATual==='principal'? <div><h1>Missões da SpaceX</h1>
     <button onClick={this.onClickFabricantes}>Fabricantes</button>
     <button onClick={this.onClickNomes}>Nome da nave</button>
     <button onClick={this.onClickTodos}>Acessar todas as naves</button> </div> : this.state.telaATual==='fabricantes'? <Fabricantes/> : this.state.telaATual==='nomes'? <Nomes/> : this.state.telaATual==='todos'? <Todos/>: <div></div>
     
       }
      
    </div>
  );
}
}