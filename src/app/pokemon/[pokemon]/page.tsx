import { IPokemon } from '@/utils/interfaces';
import '../pokemon.scss'
import DisplayPokemon from '@/components/DisplayPokemon';


let pokemonSpec: IPokemon;

const SpecificPokemon = async ({ params }: { params: { pokemon: any } }) => {

    const { pokemon } = await params;
    try {
        const res: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
    
        const pokemonData: IPokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((item: { type: { name: string } }) => item.type.name),
        }
        pokemonSpec = pokemonData;
    } catch(e) {
        console.log(e)
    }

    return (
        <div className="pokemon__container">
            {pokemonSpec && <DisplayPokemon {...pokemonSpec} />}
        </div>
    )
}

export default SpecificPokemon;