import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom'

export const TripDetailsPage = () =>{
    const [array,setArray] = useState([])
    const [arrayAprovados,setArrayAprovados] = useState([])
    const [aprovado,setAprovado]=useState()
    const [idCandidato,setIdCandidato] = useState()
    const params=useParams()
    const nome = params.nome
    const id = params.id
    const token = localStorage.getItem('token')
    const headers = {
        headers:{
            auth: token
        }
    }
    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trip/${id}`,headers)
        .then((res)=>{
            console.log('aaa',res.data)
            setArray(res.data.trip.candidates)
            console.log('aprovados',res.data.trip.approved)
            setArrayAprovados(res.data.trip.approved)
        })
    },[idCandidato])
    console.log('apr',arrayAprovados)
    const aprovarCandidato = (candId,result) =>{ 
        const body ={
            approve:result
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${id}/candidates/${candId}/decide`,body,headers)
        .then((res)=>{
            setAprovado(result)
            setIdCandidato(candId)
        })
    }
    console.log(array,'array')
    
    const history = useHistory()
  const volta = ()=>{
        history.goBack()
        
  }
 
    return(
        
        <div>   
            <button onClick={volta}>voltar</button> 
            <h1>Detalhes da viagem</h1>
            <h2>Dados dos Candidatos para {nome}</h2>
            {array.length>0 ?  array.map((a)=>{
                return (
                    <div>
                        <h4>Nome: {a.name}</h4>
                        <p>Idade: {a.age}</p>
                        <p>País: {a.country}</p>
                        <p>Profissão: {a.profession}</p>
                        <p>{a.applicationText}</p>
                        <button onClick={()=>aprovarCandidato(a.id,true)}>Aprovar este!</button>
                    </div>
                )
            }): <h2>Sem candidatos para analisar</h2>}
           
            <h2>Candidatos aprovados</h2>
            {arrayAprovados.length>0? arrayAprovados.map((a)=>{
                return (
                    <div>
                        <h4>Nome: {a.name}</h4>
                        <p>Idade: {a.age}</p>
                        <p>País: {a.country}</p>
                        <p>Profissão: {a.profession}</p>
                        <p>{a.applicationText}</p>
                        
                    </div>
                )
            }): <h2>Sem candidatos aprovados até o momento</h2>}
        </div>
    )
}
