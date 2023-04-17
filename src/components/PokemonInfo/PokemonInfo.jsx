import PockemonErrorView from "components/PockemonErroreView/PockemonErrorView";
import PokemonDataView from "components/PokemonDataView/PokemonDataView";
import { useEffect, useState } from "react";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}

export default function PokemonInfo({ pokemonName }) {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

        useEffect(() => {
            if(!pokemonName) {
                return;
            }

                setStatus(Status.PENDING);

                fetch(URL_BASE + pokemonName)
                .then(response => {
                    if(response.ok) {
                       return response.json();
                    };
                    return Promise.reject(new Error(`Don't pokemon with name ${pokemonName}`));
                    })
                .then(pokemon => {
                    setPokemon(pokemon);
                    setStatus(Status.RESOLVED);
                })
                .catch(error => {
                    setError(error);
                    setStatus(Status.REJECTED);
                    })
        }, [pokemonName]);


            if(status === Status.IDLE) {
                return <p>Write the pokemon name</p>;
            };

            if(status === Status.PENDING) {
                return <PokemonPendingView />
            };

            if(status === Status.REJECTED) {
                return <PockemonErrorView message={error.message} /> ;
            };

            if(status === Status.RESOLVED) {
                return <PokemonDataView pokemon={pokemon} /> 
            };
};