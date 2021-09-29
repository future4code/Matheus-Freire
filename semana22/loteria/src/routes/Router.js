import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Lotomania } from '../pages/lotomania'
import { Mega} from '../pages/mega'
import { Quina } from '../pages/quina'



const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/mega' component={() => <Mega/>}/>
                <Route exact path='/quina' component={() => <Quina />} />
                <Route exact path='/lotomania' component={() => <Lotomania />} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router
