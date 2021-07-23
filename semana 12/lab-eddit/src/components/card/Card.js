import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/urls'
import { goToPost } from '../../routes/coordinator'
import './Card.css'
const Container =  styled.div`
    border: 1px solid black;
`
const Card = (array) =>{  
    const lista =array.data
    console.log('lista',lista)
    const [iden, setIden]=useState()
    const [iden2, setIden2]=useState()
    const history = useHistory()
   
    const curtir = (id,number) =>{
        const body = {
            direction: number
        }
        axios.post(`${BASE_URL}/posts/${id}/votes`,body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
            array.getData()
        })
        .catch(()=>{
            alert('erro')
        })
    }

    const deletarVoto = (index) => {
        axios.delete(`${BASE_URL}/posts/${index}/votes`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setIden2(index)
            console.log(res)
            array.getData()
        })
    }
    return(
        <div>
            {lista.map((props)=>{
                 return(
                   <div className='card'>
                    <div onClick={()=>goToPost(history,props.id)}>
                    <div className='container-header'>
                        <img className='perfil-picture' src='https://prints.ultracoloringpages.com/9cba28179f5247edeb2a087f0347eac9.png' />
                        <h4>{props.username}</h4>
                    </div>
                    <div>
                        <img className='picture-feed' src='https://s3.amazonaws.com/experimento.prd/wp-content/uploads/2019/07/australia_550879138.jpg'/>
                        <h4>{props.title} {props.body}</h4>
                    </div>
                    </div>
                    <div className='footer-card'>
                        <div className='footer-icones'>
                        <img onClick={()=>curtir(props.id,1)} className='icone' src='https://img2.gratispng.com/20180803/czt/kisspng-clip-art-computer-icons-portable-network-graphics-accessories-rustic-unlimited-5b64025f374389.7972848215332808632264.jpg' />
                        <h4> {props.voteSum===null? 0: props.voteSum}</h4>
                        <img onClick={()=>deletarVoto(props.id)} className='icone-dislike' src='https://sc.mogicons.com/share/facebook-dislike-151.jpg' />
                        </div>
                        <div className='comments'>
                        <h4>Comentários : {props.commentCount===null? 0: props.commentCount}</h4>
                        <h4></h4>
                        </div>
                    </div>
                    </div>
               
                 )   
            })}

                   
        </div>
    )
}
export default Card
