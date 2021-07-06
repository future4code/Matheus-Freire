import axios from 'axios'
import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
export const AplicationFormPage=()=>{
    
    const params = useParams()
    console.log("params", params)
    const iden = params.id
    const nome = params.nome
    console.log(nome)
    const history = useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const aplicarParaViagem = ()=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${iden}/apply`
        const headers = {
            headers: {
                ContentType: 'application/json'
            }
        }
        const body = {
            name:'ff'
        }
        axios.post(url,body,headers)
    }
    return(
        <div>
             <button onClick={voltar}>voltar</button>
            <h1>Hora de fazer sua inscricao para {nome}</h1>

        </div>
    )
}