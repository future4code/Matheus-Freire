import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import Login from '../Pages/Login/Login'
import PostPage from '../Pages/PostPage/PostPage'

const Router = () =>{
    const token = localStorage.getItem('token')
    const [rightButton,setRightButton]=useState(token ? 'Logout': 'Login')
    return(
        <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton}/>
        <Switch>
            <Route exact path='/'>
                <Login setRightButton={setRightButton}/>
            </Route>
            <Route exact path='/post'>
                <PostPage/>
            </Route >
            <Route exact path='/feed'>
                <FeedPage/>
            </Route>
            <Route exact path='/cadastre-se'>
                <CadastroPage setRightButton={setRightButton}/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router