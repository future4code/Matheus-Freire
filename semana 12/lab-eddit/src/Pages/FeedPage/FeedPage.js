import React, { useState } from 'react' 
import Card from '../../components/card/Card'
import { BASE_URL } from '../../constants/urls'
import useProtectPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
const FeedPage = () =>{
    useProtectPage()
    const [post,setPost] = useState()
    const [iden, setIden]=useState()
    const [iden2, setIden2]=useState()
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
            alert('postado')
            getData()
        })
        .catch((err)=>{
            alert('erro')
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
            <h1>FeedPage</h1>
            <form onSubmit={createPost}> 
                <input value={form.title} name={'title'} onChange={onChange} placeholder='Título do post' />
                <input value={form.body} name={'body'} onChange={onChange}  placeholder='Escreva seu post' />
                <button>Postar!!</button>
            </form>
            <Card data={data} getData={getData}/>
                    </div>
    )
}
export default FeedPage