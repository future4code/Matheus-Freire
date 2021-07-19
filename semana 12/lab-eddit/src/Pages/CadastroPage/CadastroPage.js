import React from 'react' 
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
const CadastroPage = () =>{
    const history = useHistory()
    const {form,onChange,cleanFields}=useForm({
        username:'',
        email:'',
        password:''
    })
    const onSubmitCadastro = (event) =>{
        event.preventDefault();
        axios.post(`${BASE_URL}/users/signup`,form)
        .then((res)=>{
            alert('Conta Criada com sucesso!!')
            cleanFields()
            goToLogin(history)
            
        })
        .catch(()=>{
            alert('Deu errado')
        })
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
                <button onClick={()=>goToLogin(history)}>Cadastrar</button>
            </form>
           
        </div>
    )
}
export default CadastroPage