import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'

export const LoginPage = () =>{
   /* const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const onChangeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const onChangeSenha=(event)=>{
        setSenha(event.target.value)
    }*/
    const {form,onChange,cleanFields}=useForm({
        email:'',
        password:''
    })
    const enviarLogin = (event) =>{
        event.preventDefault();
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/login',form)
        .then((res)=>{
            
            localStorage.setItem('token',res.data.token)
            history.push('/admPage')
            cleanFields()
        }).catch((err)=>{
            alert('E-mail ou senha incorretos')
        })
    }
    const history=useHistory()

    const volta = () =>{
        history.goBack()
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={enviarLogin}>
            <input required name={'email'} type='email' placeholder='E-mail' value={form.email} onChange={onChange} />
            <input required pattern={"^.{6,}"} title='A senha deve conter pelo menos 6 digitos' type='password' name={'password'} placeholder='Senha' value={form.password} onChange={onChange}/>
            <button onClick={volta}>voltar</button>
            <button >Entrar</button>
            
            </form>
           
        </div>
    )
}
