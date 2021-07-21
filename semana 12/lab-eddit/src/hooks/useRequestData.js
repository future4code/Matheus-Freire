import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useRequestData = (initialState,url,id) =>{
    const [data,setData] = useState(initialState)
    console.log(id,'id')
    console.log('data userequest',data)
    useEffect(()=>{
        axios.get(url,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setData(res.data)

        })
        .catch(()=>{
            alert('ocorreu um erro')
        })
    },[id])
    
    return {data,useEffect}
}

export default useRequestData

