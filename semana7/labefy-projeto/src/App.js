import React from 'react'
import styled from 'styled-components'
import Playlist from './components/Playlist'
const Imagem=styled.img`
  width: 8%;
  height: 15vh;
  border-radius: 20%;
  margin-left: 5%;
`
const Labefy=styled.div`
  display: flex;
  justify-content: center;
  margin-top: %;
  background-color: orange;
`
const Body=styled.div`
    background-color: orange;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
    height: 100vh;
    
`
const Conteudo=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  
` 
export default class App extends React.Component{
  state={
    tela:'principal'
  }
  onClickPlaylist=()=>{
    this.setState({tela:'playlist'})
  }
  render(){
    return(
      <div>
        {this.state.tela==='playlist' ? <Playlist/> :  < Body><Labefy>
                                              <h1>Labefy</h1>
                                <Imagem src="https://images-americanas.b2w.io/produtos/01/00/item/113872/4/113872411_1GG.jpg"/>  
                              </Labefy>
                            <Conteudo>
                              <Imagem src="data:image/jpeg;base64,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"/>
                              <button onClick={this.onClickPlaylist}>Clique aqui para criar sua playlist</button>
                                </Conteudo>  </ Body>}
         
      </div>
  
     
     
     
     
    )
  }
}
