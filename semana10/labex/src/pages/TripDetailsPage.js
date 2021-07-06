import React from 'react'
import { useHistory } from 'react-router-dom'

export const TripDetailsPage = () =>{
    
    const history = useHistory()
  const volta = ()=>{
        history.goBack()
  }
    return(
        <div>    
            <h1>Detalhes da viagem</h1>
            <button onClick={volta}>voltar</button>
            
        </div>
    )
}
