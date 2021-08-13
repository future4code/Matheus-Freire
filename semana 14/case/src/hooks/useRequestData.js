import { useEffect, useState } from 'react'
import axios from 'axios'


const useRequestData = (initialData, url) => {
    const [cards, setCards] = useState(initialData)
    const [frontImage,setFrontImage]=useState('')
    const [backImage,setBackImage]=useState('')
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setBackImage(res.data.imageBackCard)
            setFrontImage(res.data.imagesUrl)
            setCards(res.data.cards)
        })
    },[])

    return {cards,setCards,frontImage,backImage}

}

export default useRequestData