import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { toast } from 'react-toastify';

export default function PokemonForm({ onSubmit }) {

    const [pokemonName, setPokemonName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        if(!pokemonName.trim()) {
            toast.error('You need to enter the name of the pokemon!')
            return;
        }
        onSubmit(pokemonName);
        setPokemonName('');
    };

    const handleNameChange = e => setPokemonName(e.currentTarget.value.toLowerCase());

        return (
            <form 
                onSubmit={handleSubmit} 
                style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <label>Enter pokemon name:
                    <input 
                    type="text"
                    name="pokemonName" 
                    value={pokemonName} 
                    onChange={handleNameChange}
                    style={{ padding: 8 }} />
                </label>
                <button type="submit" style={{ border: "none", backgroundColor: "#fff" }}>
                    <HiMagnifyingGlass style={{ width: 28, height: 28 }} aria-label="Search" />
                </button>
            </form>
        );
};