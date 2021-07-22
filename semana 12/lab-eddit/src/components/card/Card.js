import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { goToPost } from '../../routes/coordinator'
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
                    <Container>
                    <div onClick={()=>goToPost(history,props.id)}>
                    <img src='https://www.clickgratis.com.br/blog-clickgratis/wp-content/uploads/2011/05/Desenhos-Animados-273x300.png'/>
                    <h4>{props.username}</h4>
                    <h4>{props.title} {props.body}</h4>
                    <h4>Curtidas : {props.voteSum}</h4>
                    </div>
                    <button onClick={()=>curtir(props.id,1)} >Curtir</button>
                    <button onClick={()=>deletarVoto(props.id)}>Descurtir</button>
                    <h4>Comentários: {props.commentCount}</h4>
                </Container>
                 )   
            })}

                   
        </div>
    )
}
export default Card
