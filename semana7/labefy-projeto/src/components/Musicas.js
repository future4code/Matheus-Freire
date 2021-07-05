import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Playlist from './Playlist'
import img from './img/insta.png'
const Body = styled.div`
    background-color: orange;
    height: 100vh;
    padding: 1%;
`
const Centralizar=styled.div`
    text-align: center;
`
const Imagem = styled.img`
    width: 5%;
   
`
const ListaMusica=styled.div`
    display: flex;
    margin:2%;
    justify-content: space-between;
    border: 1px solid black;
    background-color:black;
    color: orange;
    padding: 0%
    
`
const Botao=styled.div`
    margin-top: 0%;
    justify-self: flex-end;
    align-self: flex-start;
    padding: 0%;
    margin-top: 0%;

`
const IconeVoltar=styled.img`
    width:3%;
    border-radius: 100%;
`
export default class Musicas extends React.Component{
    state={
        cantor:'',
        musica:'',
        url:'',
        array:[],
        audio1:'',
        tocaVideo:'nada',
        voltarTela: 'musicas'
    }
    onClickVoltarTela=()=>{
        this.setState({voltarTela:"playlist"})
    }
    componentDidMount(){
        this.getPlaylistTracks()
    }
    getPlaylistTracks=()=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        axios.get(url,headers)
        .then((res)=>{
            console.log(res.data.result.tracks)
            this.setState({array: res.data.result.tracks})
            
        })
    }
    adicionarMusicas=()=>{
       const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        const body={
            name:this.state.musica,
            artist: this.state.cantor,
            url: this.state.url
        }
        axios.post(url,body,headers)
        .then(()=>{
            this.setState({cantor:""})
            this.setState({musica:""})
            this.setState({url:""})
            this.getPlaylistTracks()
        })
    }
    deletar=(iden)=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${iden}`
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        axios.delete(url,headers)
        .then(()=>{
            this.getPlaylistTracks()
        })
    }
    onChangeMusica=(event)=>{
        this.setState({musica: event.target.value})
    }
    onChangeCantor=(event)=>{
        this.setState({cantor: event.target.value})
    }
    onChangeUrl=(event)=>{
        this.setState({url: event.target.value})
    }
    onClickAudio=(ur)=>{
        this.setState({audio1:ur})
        this.setState({tocaVideo:'play'})
        
    }
    onClickVolta=()=>{
        this.setState({tocaVideo:'nada'})
    }
    render(){
        console.log(this.state.audio1)
        const lista = this.state.array.map((music)=>{
            return (
                <div>
                    
                     <ListaMusica >
                         
                    <h2>Musica: {music.name}</h2>
                    <h2>Cantor: {music.artist}</h2>
                    <Imagem onClick={()=>this.onClickAudio(music.url)} src="https://images.emojiterra.com/google/android-10/512px/25b6.png"/>
                    {this.state.tocaVideo==='play' &&
                <audio onClick={this.onClickVolta} controls="controls"> 
                <source src={music.url} />
            </audio>}
            <Botao><button onClick={()=>this.deletar(music.id)}>x</button></Botao>
            
                </ListaMusica>
                </div>
               
                
            )
        })
        console.log(this.state.tocaVideo)
        return(
            <div>
            {this.state.voltarTela==='playlist' ? <Playlist/> : <Body>
            <IconeVoltar onClick={this.onClickVoltarTela} src="https://w7.pngwing.com/pngs/895/794/png-transparent-back-button-arrow-icon-the-direction-of-the-thumbnail.png"/>
              <Centralizar>
              <h2>Que tal adicionar mais Músicas a sua playlist de {this.props.nome}?</h2>
               <label >Nome da Música:</label>
               <input value={this.state.musica} onChange={this.onChangeMusica}  />
               <label >Nome do Cantor:</label>
               <input value={this.state.cantor} onChange={this.onChangeCantor}  />
               <label >URL da música:</label>
               <input value={this.state.url} onChange={this.onChangeUrl}  />
               <button onClick={this.adicionarMusicas}>Adicionar</button>
               <h2>Playlist {this.props.nome}</h2>
              </Centralizar>
              
             {lista}
                
            </Body>}
            </div>
           
            
        )
    } 
   
}