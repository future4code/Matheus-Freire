import axios from 'axios'
import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import './Pages.css'
 const Imagem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
 `
 const Container = styled.div`
    display: flex;
    padding: 2%;
 `
 const Nome = styled.h4`
    margin-left: 3%;
 `
export  const Match = () => {
    const [combinacao,setCombinacao]=useState([])
    const [iden,setId]=useState('')
    useEffect(()=>{
        getMatch()
    },[])
    const getMatch = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-molina/matches'
        const headers = {
            headers: {
                Authorization: "matheus-molina"
            }
        }
        axios.get(url,headers)
        .then((res)=>{
            console.log(res.data.matches,'ressssssdddddd')
            setCombinacao(res.data.matches)
            
        })
    }
    const lista = combinacao.map((a)=>{
        return a.id
    })
    console.log('lista', lista)
    console.log('array',combinacao)
    
    return(
        <div className='body1'>
          {combinacao.map((check)=>{
              return( 
              <Container key={check.id}>
                <Imagem src={check.photo}/>
              <Nome>{check.name}</Nome>
                </Container>
                )
          })}
        </div>
    )
}
