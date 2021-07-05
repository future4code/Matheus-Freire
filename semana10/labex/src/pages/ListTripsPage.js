import React from 'react'

import { useRequestData } from '../hooks/useRequestData'
import './ListTrip.css'

export const ListTripsPage = ()=>{
    const [arrayViagens,isLoading,error]=useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips')
    console.log(arrayViagens)
    const listaViagens = arrayViagens.map((trip)=>{
        return (
            <div className='lista-viagem' key={trip.id}>
                <img className='astronauta' src='https://image.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg'/>
                <h2>{trip.name}</h2>
                <h4>{trip.description}</h4>
                <h4>{trip.planet}</h4>
                <h4>{trip.date}</h4>
                <h4>{trip.durationInDays}</h4>
                <button>Inscrever neste!!</button>

            </div>
        )
    })
    return(
        <div>
            <h1>List trips</h1>
            <div className='container'>
            {isLoading && <p>carregando...</p>}
            {!isLoading && arrayViagens.length>0 && listaViagens}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && arrayViagens.length===0 && <p>Não tem nenhuma viagem disponivel</p>}
        </div>
        </div>
    )
}