
import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

const useProtectPage = () =>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(history)
        }
    },[history])
}
export default useProtectPage