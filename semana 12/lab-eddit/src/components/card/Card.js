import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/urls'

const Container =  styled.div`
    border: 1px solid black;
`
const Card = (props) =>{  
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
        })
        .catch(()=>{
            alert('erro')
        })
    }
    return(
        <Container>
            <h4>{props.username}</h4>
            <h4>{props.title} {props.body}</h4>
            <h4>Curtidas : {props.voteSum}</h4>
            <button onClick={()=>curtir(props.id,1)} >Curtir</button>
            <h4>Comentários: {props.commentCount}</h4>
        </Container>
    )
}
export default Card
