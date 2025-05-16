import { IPokemon } from "@/utils/interfaces";
import Image from "next/image";

const DisplayPokemon = ({ id, name, image, types, onRemove }: IPokemon) => {
    return (
        <div className='pokemon__content'>
            <h3 className="pokemon__content--name">#{id} {name}</h3>
            <Image src={image} width={200} height={200} alt="pokemon" className="" />
            {onRemove && <button className="" onClick={() => onRemove && onRemove(id)}>Remove</button>}

            <div className="pokemon__content--types">
                {types.map((item: string, index: number) => <a href={`/types/${item}`} className={`pokemon__content--${item} space-m`} key={index}>{item} </a>)}
            </div>
        </div>
    )
}

export default DisplayPokemon;