import React from 'react' 
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { sendSignUp } from '../../services/user'
import useUmprotectPage from '../../hooks/useUmprotectPage'
const CadastroPage = (props) =>{
    useUmprotectPage()
    const history = useHistory()
    const {form,onChange,cleanFields}=useForm({
        username:'',
        email:'',
        password:''
    })
    const onSubmitCadastro = (event) =>{
        event.preventDefault()
        sendSignUp(form,cleanFields,history,props)
    }
    return(
        <div>
            <h1>Página de cadastro</h1>
            <form onSubmit={onSubmitCadastro}>
                <input 
                required 
                placeholder='Nome'
                name={'username'} 
                 value={form.username}
                 onChange={onChange}
                />
                <input required
                 type='email' 
                 placeholder='E-mail'
                 name={'email'} 
                 value={form.email}
                 onChange={onChange}
                 />
                <input required
                 type='password'
                  placeholder='Senha'
                  name={'password'} 
                 value={form.password}
                 onChange={onChange}
                  />
                <button >Cadastrar</button>
            </form>
           
        </div>
    )
}
export default CadastroPage