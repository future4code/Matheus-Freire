import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const CreateTripPage = () =>{
    const [nome,setNome] = useState('')
    const [planeta,setPlaneta]=useState('')
    const [descricao,setDescricao]=useState('')
    const [data,setData]=useState()
    const [duracao,setDuracao]=useState()
    const onchangeNome=(event)=>{
        setNome(event.target.value)
    }
    const onchangePlaneta=(event)=>{
        setPlaneta(event.target.value)
    }
    const onchangeDescricao=(event)=>{
        setDescricao(event.target.value)
    }
    const onchangeData=(event)=>{
        setData(event.target.value)
    }
    const onchangeDuracao=(event)=>{
        setDuracao(event.target.value)
    }
    const criarViagem =()=>{
        const token = localStorage.getItem('token')
        const headers = {
            headers:{
                auth: token
            }
        }
        const body = {
            
    name: nome,
    planet: planeta,
    date: data,
    description: descricao,
    durationInDays: duracao
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips',body,headers)
        .then(()=>{
            alert('Viagem criado com sucesso')
            history.push('/admPage')
        })
    }
    const history = useHistory()
  const volta = ()=>{
        history.goBack()
  }
    return(
        <div>  
            <button onClick={volta}>voltar</button>  
            <h1>Criar viagens</h1>
            <input  placeholder='Nome' value={nome} onChange={onchangeNome} />
            <select value={planeta}  onChange={onchangePlaneta}>
                <option>Escolha um planeta</option>
                <option value='mercurio'>Mercúrio</option>
                <option value='venus'>Vênus</option>
                <option value='terra'>Terra</option>
                <option value='marte'>Marte</option>
                <option value='jupiter'>Jupiter</option>
            </select>
            <input placeholder='Descrição' value={descricao}  onChange={onchangeDescricao} />
            <input type='date' value={data}  onChange={onchangeData} />
            <input placeholder='Duração em dias' value={duracao}  onChange={onchangeDuracao}/>
            <button onClick={criarViagem}>Criar</button>
            
        </div>
    )
}
