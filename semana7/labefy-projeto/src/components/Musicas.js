import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Imagem = styled.img`
    width: 3%;
`

export default class Musicas extends React.Component{
    state={
        cantor:'',
        musica:'',
        url:'',
        array:[],
        audio:'',
        tocaVideo:'nada'
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
        this.setState({audio:ur})
        this.setState({tocaVideo:'play'})
        
    }
    onClickVolta=()=>{
        this.setState({tocaVideo:'nada'})
    }
    render(){
        console.log(this.state.audio)
        const lista = this.state.array.map((music)=>{
            return (
                <div>
                    <p>Musica: {music.name}</p>
                    <p>Cantor: {music.artist}</p>
                    <Imagem onClick={()=>this.onClickAudio(music.ur)} src="https://images.emojiterra.com/google/android-10/512px/25b6.png"/>
                </div>
            )
        })
        console.log(this.state.tocaVideo)
        return(
            <div>
               <h2>Que tal adicionar mais Músicas a sua playlist de {this.props.nome}</h2>
               <label >Nome da Música:</label>
               <input value={this.state.musica} onChange={this.onChangeMusica}  />
               <label >Nome do Cantor:</label>
               <input value={this.state.cantor} onChange={this.onChangeCantor}  />
               <label >URL da música:</label>
               <input value={this.state.url} onChange={this.onChangeUrl}  />
               <button onClick={this.adicionarMusicas}>Adicionar</button>
               <h2>Playlist {this.props.nome}</h2>
             {lista}
             {this.state.tocaVideo==='play' ? <video onClick={this.onClickVolta} width="750" height="500" controls  >
             <source src={this.state.audio} type="video/mp4" />
                 </video> : <div></div>}
            </div>
        )
    }
   
}