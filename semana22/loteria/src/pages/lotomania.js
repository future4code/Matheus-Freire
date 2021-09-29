import React from "react"
import {useParams} from 'react-router-dom'
export const Lotomania= ()=>{
    const params = useParams()
    console.log(params.lotomania,"parametroo")
    return(
        <div>
           lotomania
        </div>
    )
}