import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import PokemonForm from "../PokemonForm/PokemonForm";
import PokemonInfo from "../PokemonInfo/PokemonInfo";


export default function PokemonView() {
    const [pokemonName, setPokemonName] = useState('');

    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <h2>Pokemon</h2>
        <PokemonForm onSubmit={setPokemonName} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer />
      </div>
    );
};

