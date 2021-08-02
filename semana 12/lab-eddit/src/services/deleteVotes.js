import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const sendDeleteCommentVote = (getData,id) =>{
    axios.delete(`${BASE_URL}/comments/${id}/votes`,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res)=>{
        alert('curtida no comentário deletada')
        getData()
    })
    .catch((err)=>{
        alert('não foi possivel executar a ação')
    })
}