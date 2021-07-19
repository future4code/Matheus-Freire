import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";
export const login =(body,cleanFields,history)=>{
    
    axios.post(`${BASE_URL}/users/login`,body)
    .then((res)=>{
        console.log(res.data)
        localStorage.setItem('token',res.data.token)
        cleanFields()
        goToFeed(history)
    })
    .catch((err)=>{
        alert("deu ruim")
    })
}