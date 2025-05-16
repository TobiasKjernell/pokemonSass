'use client'
import { IPokemon } from '@/utils/interfaces';
import './pokemon.scss'
import { useState } from 'react';
import DisplayPokemon from '@/components/DisplayPokemon';

const Pokemon = () => {

    const [caughtPokemon, setCaughtPokemon] = useState<IPokemon | null>(null)
    async function getPokemon(): Promise<void> {

        const randomNum: number = Math.round(Math.random() * 150);
        const res: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        const data = await res.json();

        const pokemonData: IPokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((item: { type: { name: string } }) => item.type.name),
        }

        setCaughtPokemon(pokemonData);
    }

    return (
        <div className="pokemon__container">
            {caughtPokemon && <DisplayPokemon {...caughtPokemon} />}
            <button className='pokemon__container--button' onClick={getPokemon}> Catch a pokemon</button>
        </div>
    )
}

export default Pokemon;