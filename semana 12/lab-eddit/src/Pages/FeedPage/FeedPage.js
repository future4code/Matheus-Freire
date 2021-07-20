import React from 'react' 
import useProtectPage from '../../hooks/useProtectPage'

const FeedPage = () =>{
    useProtectPage()
    return(
        <div>
            <h1>FeedPage</h1>
        </div>
    )
}
export default FeedPage