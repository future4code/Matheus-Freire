import React from 'react'
import { useHistory } from 'react-router-dom'

export const LoginPage = () =>{
    const history=useHistory()
    const irAdm = ()=>{
        history.push('/admPage')
    }
    const volta = () =>{
        history.goBack()
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={volta}>voltar</button>
            <button onClick={irAdm}>Entrar</button>
            
        </div>
    )
}
