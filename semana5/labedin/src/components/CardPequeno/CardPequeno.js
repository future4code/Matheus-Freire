import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components'
const Container=styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`
const Imagem= styled.img `
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
function CardPequeno(props){
    return(
        <Container>
            <Imagem src={props.imagem}/>
            <p>{props.email}</p>
        </Container>
    )
}

export default CardPequeno;