import './types.scss'
let allTypes: string[];

const Types = () => {

    const fetchTypes = async () => {

        try {
            const res = await fetch('https://pokeapi.co/api/v2/type');
            const data = await res.json();

            allTypes = data.results.map((item: { name: string; }) => item.name);

        } catch (error) {
            console.log(error)
        }
    }

    fetchTypes();

    return (
        <div className="pokemon__types">
            {allTypes &&  allTypes.filter((_, index) => index < 18).map((item: string, index: number) => <a href={`/types/${item}`} className={`pokemon__content--${item}`} key={index}>{item}</a>)}
        </div>

    )
}

export default Types;