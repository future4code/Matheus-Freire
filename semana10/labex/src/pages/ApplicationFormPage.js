import axios from 'axios'
import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
export const AplicationFormPage=()=>{
    
    const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: '',
    country: ''
    })
    const params = useParams()
    console.log("params", params)
    const iden = params.id
    const nome = params.nome
    const history = useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const aplicarParaViagem = (event)=>{
        event.preventDefault();
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${iden}/apply`
        axios.post(url,form)
        .then((res)=>{
            alert('Inscrição confirmada')
            history.push("/")
            cleanFields()
        })
        }
       
       
    
    return(
        <div>
             <button onClick={voltar}>voltar</button>
            <h1>Hora de fazer sua inscricao para {nome}</h1>
            <form onSubmit={aplicarParaViagem}>
                <input name={'name'} value={form.name} onChange={onChange} placeholder='Nome'/>
                <input name={'age'} type='number' value={form.age} onChange={onChange} placeholder='Idade'/>
                <input name={'applicationText'}  value={form.applicationText} onChange={onChange} placeholder='Texto para aplicação'/>
                <input name={'profession'}  value={form.profession} onChange={onChange} placeholder='Profissão'/>
                <input  name={'country'} value={form.country} onChange={onChange} placeholder='País'/>
                <button>Aplicar</button>
            </form>

        </div>
    )
}
