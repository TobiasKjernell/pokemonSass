'use client'
import { useEffect, useState } from 'react';
import '../types.scss';

interface IPokemon {
    pokemon: {
        name: string,
        url: string
    }
}

let data: IPokemon[];

let typeParam: string = "";
const TypePage = ({ params }: { params: { type: string } }) => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchTypes = async () => {
            try {
                setIsLoading(true);
                const { type } = await params;
                const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
                const jsonData = await res.json();
                data = jsonData.pokemon;
                typeParam = type;
                console.log(typeParam)
                setIsLoading(false);

            } catch (error) {
                console.log(error)
            }
        }
        fetchTypes();
    }, [])

    if (isLoading) return <div>is loading...</div>
    return (
        <div>
            <h1 className={`pokemon__title pokemon__title-${typeParam}`}>{typeParam}</h1>
            <div className="pokemon__types">
                {data && data.map((item: IPokemon, index: number) => <a href={`/pokemon/${item.pokemon.name}`} className={`pokemon__content--${typeParam}`} key={index}>{item.pokemon.name}</a>)}
            </div>
        </div>
    )
}

export default TypePage;