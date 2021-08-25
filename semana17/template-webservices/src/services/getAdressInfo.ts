import axios from "axios";
import { adressInfo } from "../types";


export const getAdressInfo = async(
    zipCode: string
):Promise<adressInfo | null>=>{
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
        return{
            logradouro:response.data.logradouro,
            bairro: response.data.bairro,
            cidade:response.data.localidade,
            estado: response.data.uf
        }
    }catch(error){
        console.log(error)
        return null
    }
    
}