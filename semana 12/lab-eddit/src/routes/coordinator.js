export const goToFeed = (history) =>{
    history.push('/feed')
}
export const goToPost = (history,id) =>{
    history.push(`/post/${id}`)
}
export const goToCadastro = (history) =>{
    history.push('/cadastre-se')
}
export const goToLogin = (history)=>{
    history.push('/')
}