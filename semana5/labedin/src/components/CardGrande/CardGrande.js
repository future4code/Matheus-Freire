import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'
const Cardgrande= styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Imagem1= styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Separar=styled.div `
     display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Letra = styled.h4 `
     margin-bottom: 15px;
`
function CardGrande(props) {
    return (
        <Cardgrande>
            <Imagem1 src={ props.imagem } />
            <Separar>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </Separar>
        </Cardgrande>
    )
}

export default CardGrande;