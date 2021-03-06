import React from 'react'
import { useHistory } from 'react-router'
import { goToCadastro, goToFeed } from '../../routes/coordinator'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import useUmprotectPage from '../../hooks/useUmprotectPage'
import './Login.css'
const Login = ({setRightButton}) => {
    useUmprotectPage()
    const {form,onChange,cleanFields}=useForm({
        email:'',
        password:''
    })
    const history = useHistory()
    const sendLogin =(event)=>{
        event.preventDefault();
        login(form,cleanFields,history,setRightButton)
    }
    return (
        <div className='body-login'>
            <div className='container-login'>
            <h1>Login</h1>
            <div className='separar-botao-input'>
            <form onSubmit={sendLogin}>
                <input type='email'
                 required 
                 placeholder='E-mail'
                 name={'email'} 
                 value={form.email}
                 onChange={onChange}
                 />
                <input type='password'
                 required 
                 placeholder='senha'
                 name={'password'} 
                 value={form.password}
                 onChange={onChange}
                 />
                <button>Entrar</button>
                <button onClick={() => goToCadastro(history)}>Cadastre-se</button>
            </form>
            
            </div>
            </div>
        </div>
    )
}
export default Login