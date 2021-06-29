import React,{useState,useEffect} from "react";
import axios from "axios";

const PokeCard = () => {
  const [pokemon,setPokemon]=useState({})
  /*state = {
    // valor do estado que guarda infos e foto do pokemon
    pokemon: {}
  };*/

  // método que roda após a montagem do componente
  useEffect(()=>{
    const pegaPokemon = async (pokeName) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        setPokemon( response.data );
      }catch (erro) {
        console.log(erro)
      }
    }
    pegaPokemon()
  })

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
 /* componentDidUpdate(prevProps) {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }*/

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  

  const pokemon1 = pokemon

    return (
      <div>
        <p>{pokemon1.name}</p>
        <p>{pokemon1.weight} Kg</p>
        {pokemon1.types && <p>{pokemon1.types[0].type.name}</p>}
        {pokemon1.sprites && (
          <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
        )}
      </div>
    );
  }


export default PokeCard;
