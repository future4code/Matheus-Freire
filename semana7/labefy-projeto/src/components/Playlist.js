import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Musicas from './Musicas'
const Body=styled.div`
    background-color: orange;
    height: 100vh;
`
const Imagem=styled.img`
    width: 80%;
    height: ;
    border-radius: 100%;
    
`
const Playlists=styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:1%;
    
   
    height: 50vh;
`
const Icone=styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Lista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export default class Playlist extends React.Component{
    state={
        inputPlaylist:"",
        arrayPlaylist:[],
        trocarTela: 'playlist',
        id: '',
        nome:''
    }
    onClickMusicas=(name,iden)=>{
        this.setState({trocarTela:'musicas'})
        this.setState({nome:name})
        this.setState({id:iden})
    }
    onChangePlaylist=(event)=>{
        this.setState({inputPlaylist: event.target.value})
    }
    componentDidMount(){
        this.getAllPlaylists()
    }
    getAllPlaylists=()=>{
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        axios.get(url,headers)
        .then((res)=>{
            console.log("playlist",res.data.result.list)
            this.setState({arrayPlaylist:res.data.result.list})
            
        })
    }
    createPlaylist=()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        const body={
            
                name: this.state.inputPlaylist
            }
        
        axios.post(url,body,headers)
        .then(()=>{
            this.setState({inputPlaylist:''})
            this.getAllPlaylists()
        }).catch((err)=>{
            console.log(err.response.data)
          })
    }
    deletePlaylist=(id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const headers={
            headers:{
                Authorization: "matheus-freire-molina"
            }
        } 
        const perguntaUsuario=prompt('Tem certeza que deseja deletar essa Playlist?').toLocaleLowerCase()
        if(perguntaUsuario==='sim'){
            axios.delete(url,headers)
            .then(()=>{
                alert("Playlist deletada")
                this.getAllPlaylists()
            })
            }else if(perguntaUsuario==='nao'){
                alert('Playlist não deletada')
            }
        }
    render(){
        console.log(this.state.nome)
        const listaPlaylist=this.state.arrayPlaylist.map((playlist)=>{
            return (<Playlists  key={playlist.id}>
                    <Imagem onClick={()=>this.onClickMusicas(playlist.name,playlist.id)} src="https://w7.pngwing.com/pngs/405/212/png-transparent-music-itunes-store-podcast-icon-orang-orange-musician-internet-radio.png"/>
                    <Icone>
                    <p onClick={()=>this.onClickMusicas(playlist.name,playlist.id)}>{playlist.name}</p>
                    <button onClick={()=>this.deletePlaylist(playlist.id)}>X</button>
                    </Icone>
                    
            </Playlists>)
        })
        return(
            <div>
                {this.state.trocarTela==='musicas' ? <Musicas id={this.state.id} nome={this.state.nome}/> : <Body>
                <input placeholder="Criar playlist" value={this.state.inputPlaylist} onChange={this.onChangePlaylist}></input>
                <button onClick={this.createPlaylist}>Criar</button>
                     <Lista>      {listaPlaylist}   </Lista>
                                                    </Body>}
                
           
            </div>
        )
    }
}