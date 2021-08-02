import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { sendDeleteCommentVote } from '../../services/deleteVotes'
import './Comments.css'

const Comments = (props) =>{
    const {data,getData}= useRequestData([],`${BASE_URL}/posts/${props.id}/comments`)
   useEffect(()=>{
       getData()
   },[props.postComment])
    /*useEffect(()=>{
        axios.get(`${BASE_URL}/posts/${props.id}/comments`,{
            headers:{
                Authorization : localStorage.getItem('token')
            }  
        })
        .then((res)=>{
            console.log(res,'comments')
        })
    },[])*/
    const sendCommentVote = (id,number) =>{
        const body = {
            direction: number
        }
        axios.post(`${BASE_URL}/comments/${id}/votes`,body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            getData()
            alert('voto com sucesso')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const deleteCommentVote = (id) => {
        sendDeleteCommentVote(getData,id)
    }
    return(
        <div>
           {data.map((x)=>{
               return( 
                   <div className = 'comments-card'>
                       <div className='comments1'> 
                            <img className='perfil-pic' src='https://prints.ultracoloringpages.com/9cba28179f5247edeb2a087f0347eac9.png' />
                            <div className='user'>
                                <h4>{x.username}</h4>
                                <h4>{x.body}</h4>
                            </div>
                       </div>
                       <div className='footer-comments'>
                            <img onClick={()=>sendCommentVote(x.id,1)} className='icone1' src='https://img2.gratispng.com/20180803/czt/kisspng-clip-art-computer-icons-portable-network-graphics-accessories-rustic-unlimited-5b64025f374389.7972848215332808632264.jpg' />
                            <h4>{x.voteSum===null? 0 : x.voteSum}</h4>
                            <img onClick={()=>deleteCommentVote(x.id)} className='icone-dislike1' src='https://sc.mogicons.com/share/facebook-dislike-151.jpg' />
                       </div>
                   </div>
               )
           })}
        </div>
    )
}
export default Comments