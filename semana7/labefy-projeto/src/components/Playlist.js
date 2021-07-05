import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Musicas from './Musicas'
import App from '../App'
const Titulo=styled.h2`
    text-align: center;
`
const IconeVoltar=styled.img`
    width:3%;
    border-radius: 100%;
`
const Botao=styled.button`
    margin-left: 100%;
    margin-top: -2.5%;
    width: 5%;
    height: 3vh;
    
`
const Tudo=styled.div` 
    background-color: orange;
`
const Body=styled.div`
    background-color: orange;
    margin-top: ;
    height: 100%;
    padding: 1%;
`
const Imagem=styled.img`
    width: 30%;
   
    border-radius: 100%;
    
`
const Playlists=styled.div`
   
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2%;
    background-color: black;
    padding: 2%;
   color: orange;
    height: 40vh;
    
`
const Icone=styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Lista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   
    
`
const Imput=styled.div`
    text-align: center;
`
export default class Playlist extends React.Component{
    state={
        inputPlaylist:"",
        arrayPlaylist:[],
        trocarTela: 'playlist',
        id: '',
        nome:'',
        voltarTela:'playlist'
    }
    onClickVoltarTela=()=>{
        this.setState({voltarTela:"tela principal"})
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
            return (
            
            <Playlists  key={playlist.id}>
                <Botao onClick={()=>this.deletePlaylist(playlist.id)}>X</Botao>
                    <Imagem onClick={()=>this.onClickMusicas(playlist.name,playlist.id)} src="https://www.fotoefeitos.com/images/202106/18/fotoefeitos.com__final_1420079290865678736_.jpg?act=11"/>
                    <Icone>
                    <h3 onClick={()=>this.onClickMusicas(playlist.name,playlist.id)}>{playlist.name}</h3>
                    
                    </Icone>
                    
            </Playlists>)
        })
        return(
            <div>
                {this.state.trocarTela==='musicas' ? <Musicas id={this.state.id} nome={this.state.nome}/> : 
                this.state.voltarTela==='tela principal' ? <App/> :
                <Body>
                <IconeVoltar onClick={this.onClickVoltarTela} src="https://w7.pngwing.com/pngs/895/794/png-transparent-back-button-arrow-icon-the-direction-of-the-thumbnail.png"/>
                 <Titulo>Hora de criar sua playlist, fala pra gente do seus gêneros de músicas preferido!!</Titulo>
                <Imput>
                <input placeholder="Criar playlist" value={this.state.inputPlaylist} onChange={this.onChangePlaylist}></input>
                <button onClick={this.createPlaylist}>Adicionar Playlist</button>
                </Imput>
                
                <Titulo>Minha Playlist</Titulo>
                     <Lista>      {listaPlaylist}   </Lista>
                                                    </Body>}
                
           
            </div>
        )
    }
}