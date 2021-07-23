import axios from 'axios'
import React, { useState } from 'react' 
import { useHistory, useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import Comments from '../../components/comments/Comments'
import Header from '../../components/Header'
import { BASE_URL } from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import { goToFeed } from '../../routes/coordinator'
import './PostPage.css'
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
            <Card data = {lista} getData={getData} />
            <form className='form' onSubmit={postComment}>
            <img className='perfil' src='https://prints.ultracoloringpages.com/9cba28179f5247edeb2a087f0347eac9.png' />
                <input value={form.body} name={'body'} onChange={onChange} placeholder = 'escreva seu comentário'/>
                <button>Enviar</button>
            </form>
            <Comments id={params.id}
            postComment={postComment}
            />
        </div>
    )
}
export default PostPage