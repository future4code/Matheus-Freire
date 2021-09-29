import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useRequestData = (initialState,url) =>{
    const [data,setData] = useState(initialState)
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data)

        })
        .catch(()=>{
            alert('ocorreu um erro')
        })
    
    },[])
      
    
    
    return data
}
export default useRequestData