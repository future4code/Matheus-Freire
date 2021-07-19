import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CadastroPage from '../Pages/CadastroPage/CadastroPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import Login from '../Pages/Login/Login'
import PostPage from '../Pages/PostPage/PostPage'

const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/post'>
                <PostPage/>
            </Route >
            <Route exact path='/feed'>
                <FeedPage/>
            </Route>
            <Route exact path='/cadastre-se'>
                <CadastroPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router