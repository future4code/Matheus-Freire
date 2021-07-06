import React from 'react'
import { useHistory } from 'react-router-dom'

export const CreateTripPage = () =>{
    
    const history = useHistory()
  const volta = ()=>{
        history.goBack()
  }
    return(
        <div>    
            <h1>Criação de página</h1>
            <button onClick={volta}>voltar</button>
            
        </div>
    )
}
