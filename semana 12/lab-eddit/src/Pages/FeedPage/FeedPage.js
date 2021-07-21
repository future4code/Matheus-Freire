import React, { useState } from 'react' 
import Card from '../../components/card/Card'
import { BASE_URL } from '../../constants/urls'
import useProtectPage from '../../hooks/useProtectPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
const FeedPage = () =>{
    useProtectPage()
    const [iden, setIden]=useState()
    const {data,useEffect}= useRequestData([],`${BASE_URL}/posts`,iden)
   
    const curtir = (id,number) =>{
        
        const body = {
            direction: number
        }
        axios.post(`${BASE_URL}/posts/${id}/votes`,body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
            setIden(id)
        })
        .catch(()=>{
            alert('erro')
        })
    }
    console.log('data feed', data)
    const cards = data.map((post)=>{
        return(
            <div>
            <Card
            body={post.body}
            title={post.title}
            username={post.username}
            commentCount = {post.commentCount}
            voteSum={post.voteSum}
            id = {post.id}
            data={data}
            />
            <button onClick={()=>curtir(post.id,1)} >Curtir</button>
            <h1>pronto: {post.voteSum}</h1>
        </div>
        )
    })  
    return(
        <div>
            <h1>FeedPage</h1>
            <form>
                <input placeholder='Escreva seu Post' />
                <button>Postar!!</button>
            </form>
            {cards}
        </div>
    )
}
export default FeedPage