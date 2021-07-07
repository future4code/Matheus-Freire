import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const LoginPage = () =>{
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const onChangeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const onChangeSenha=(event)=>{
        setSenha(event.target.value)
    }
    const enviarLogin = () =>{
        const body = {
            email:email,
            password:senha
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/login',body)
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            history.push('/admPage')
        }).catch((err)=>{
            alert('E-mail ou senha incorretos')
        })
    }
    const history=useHistory()

    const irAdm = ()=>{
        
    }
    const volta = () =>{
        history.goBack()
    }
    return(
        <div>
            <h1>Login</h1>
            <input placeholder='E-mail' value={email} onChange={onChangeEmail} />
            <input type='password' placeholder='Senha' value={senha} onChange={onChangeSenha}/>
            <button onClick={volta}>voltar</button>
            <button onClick={enviarLogin}>Entrar</button>
            
        </div>
    )
}
