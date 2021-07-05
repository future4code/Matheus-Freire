import React from 'react'
import styled from 'styled-components'
import Playlist from './components/Playlist'
const Insta = styled.img`
  width: 3%;
`
const Imagem=styled.img`
  width: 15%;
  height: 15vh;
  border-radius: 100%;
  
`
const Labefy=styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 2%;
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
  justify-content: center;
  align-items: center;
  margin-top: %;
  
` 
const Footer = styled.div`
  text-align: center;
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
                                <Imagem src="https://thumbs.dreamstime.com/b/letra-dj-de-e-no-logotipo-do-fones-ouvido-104445639.jpg"/>  
                              </Labefy>
                              <Conteudo>
                                <h2>Embarque com a gente nessa viagem!! Clique no avião abaixo e vem curtir com a gente!</h2>
                              <Imagem onClick={this.onClickPlaylist} src="https://blog.trocafone.com/wp-content/uploads/2019/05/airplane-mode-prevents-annoying-signals-from-reaching-your-pilot.png"/>
                              </Conteudo>
                             
                            <Footer>
                              
                              <h2>Gostou da gente? Segue a gente nas redes socias!!</h2>
                              <Insta src='https://image.flaticon.com/icons/png/512/87/87390.png' />
                                </Footer>  </ Body>}
         
      </div>
  
     
     
     
     
    )
  }
}
