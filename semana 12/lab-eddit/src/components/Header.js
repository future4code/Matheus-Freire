import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../routes/coordinator'
import './style.css'
const Header =({rightButton, setRightButton})=>{
   const token = localStorage.getItem('token')
   console.log(token)
    const history = useHistory()
  /*  const logOut=()=>{
       
      }*/
      const rightButtonAction = ()=>{
          console.log('oi')
          console.log(token)
        if(token){
            localStorage.removeItem('token')
          setRightButton('Login')
          goToLogin(history)
        }
        else{
          goToLogin(history)
        }
      }
    return(
        <div className='container'>
            <button onClick={()=>goToFeed(history)}>Posts</button>
            <button onClick={rightButtonAction} >{rightButton}</button>
        </div>
    )
}
export default Header 