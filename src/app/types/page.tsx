'use client'
import { useEffect, useState } from 'react';
import './types.scss'

interface IPokemonTypes {
    types: string[];
}

const Types = () => {
    const [pokemonTypes, setPokemonTypes] = useState<IPokemonTypes | null>(null);

    const fetchTypes = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/type');
            const data = await res.json();

            const allTypes: IPokemonTypes = {
                types: data.results.map((item: { name: string; }) => item.name)
            } 

           
            setPokemonTypes(allTypes);


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTypes();
    }, [])

    return (
        <div className="pokemon__types">
            {pokemonTypes && pokemonTypes.types.filter((_, index) => index < 18).map((item: string, index: number) => <a href={`/types/${item}`} className={`pokemon__content--${item}`} key={index}>{item}</a>)}
        </div>

    )
}

export default Types;