import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";
export const login =(body,cleanFields,history,setRightButton)=>{
    
    axios.post(`${BASE_URL}/users/login`,body)
    .then((res)=>{
        localStorage.setItem('token',res.data.token)
        cleanFields()
        goToFeed(history)
        setRightButton('Logout')
    })
    .catch((err)=>{
        alert(err.response.data)
    })
}
export const sendSignUp =(body,cleanFields,history,setRightButton)=>{
    axios.post(`${BASE_URL}/users/signup`,body)
    .then((res)=>{
        localStorage.setItem('token',res.data.token)
        cleanFields()
        goToFeed(history)
        setRightButton('Logout')
        alert('cadastro com sucesso')
    })
    .catch((err)=>{
        console.log(err)
    })
}