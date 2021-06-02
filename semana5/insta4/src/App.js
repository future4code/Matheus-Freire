import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post1 from './components/Post/Post1'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const MainContainer1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post1
          nomeUsuario={'joao'}
          fotoUsuario={'https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-oceano-com-nuvem-branca-azul-ceu-e-copyspace_74190-8663.jpg?size=626&ext=jpg'}
          fotoPost={'https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-oceano-com-nuvem-branca-azul-ceu-e-copyspace_74190-8663.jpg?size=626&ext=jpg'}
      />
        </MainContainer>
     
    );
  }
}

export default App;
