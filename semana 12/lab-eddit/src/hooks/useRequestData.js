import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useRequestData = (initialState,url,id,id2) =>{
    const [data,setData] = useState(initialState)
    const getData = () =>{
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
    }
    useEffect(()=>{
        getData()
    },[])
    
    return {data,getData}
}
export default useRequestData

