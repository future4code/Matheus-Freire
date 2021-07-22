import axios from 'axios'
import React, { useState } from 'react' 
import { useHistory, useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import Header from '../../components/Header'
import { BASE_URL } from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import { goToFeed } from '../../routes/coordinator'

const PostPage = () =>{
    const [iden, setIden]=useState()
    const [iden2, setIden2]=useState()
    const {form,onChange,cleanFields}=useForm({
        body:'',
    })
    const params = useParams()
    const {data,getData}= useRequestData([],`${BASE_URL}/posts`)
    const lista = data.filter((x)=>{
        return x.id === params.id
    })
    const postComment = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts/${params.id}/comments`,form,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            cleanFields()
            getData()
            alert('comentário realizado com sucesso!!')
        })
        .catch(()=>{
            alert('Erro no comentário')
        })
    }
  const history = useHistory()
    return(
        <div>
            <button onClick={()=>goToFeed(history)}>Voltar</button>
            <h1>Página de posts</h1>
            <Card data = {lista} getData={getData} />
            <form onSubmit={postComment}>
                <input value={form.body} name={'body'} onChange={onChange} placeholder = 'escreva seu comentário'/>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default PostPage