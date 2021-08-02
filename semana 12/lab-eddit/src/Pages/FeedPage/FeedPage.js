import React, { useState } from 'react' 
import Card from '../../components/card/Card'
import { BASE_URL } from '../../constants/urls'
import useProtectPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import './FeedPage.css'
const FeedPage = () =>{
    useProtectPage()
    const {data,getData}= useRequestData([],`${BASE_URL}/posts`)
    const {form,onChange,cleanFields}=useForm({
        title:'',
        body:''
    })
   const createPost=(event)=>{
    event.preventDefault()
        axios.post(`${BASE_URL}/posts`,form,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res,'resposta')
            cleanFields()
            alert('Post realizado com sucesso')
            getData()
        })
        .catch((err)=>{
            alert('não foi possível concluir a ação')
        })
   }
    /*const list = data.map((z)=>{
        return <Card
       username = {z.username}
     title= {z.title} body= {z.body}
        voteSum={z.voteSum}
        id={z.id}

      commentCount={z.commentCount}
        />
    })*/
    return(
        <div>
            <div className='feed-container'>
                <div>
                    <img className='perfill' src='https://prints.ultracoloringpages.com/9cba28179f5247edeb2a087f0347eac9.png' />
                </div>
                <div>
            <form  onSubmit={createPost}> 
                <input value={form.title} name={'title'} onChange={onChange} placeholder='Título do post' />
                <input value={form.body} name={'body'} onChange={onChange}  placeholder='No que você está pensando?' />
                <button >Postar!!</button>
            </form>
            </div>
            </div>
            <Card data={data} getData={getData}/>
                    </div>
    )
}
export default FeedPage