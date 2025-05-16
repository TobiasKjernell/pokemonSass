import HomeGridItem from "@/components/HomeGridItem";
import { IHomeGridItem } from "@/utils/interfaces";


const pokemons:IHomeGridItem[] = [
  { title:"Pokemon1", image:"/pokemon1.png", style:"primary" },
  { title:"Pokemon2", image:"/pokemon2.png", style:"secondary" },
  { title:"Pokemon3", image:"/pokemon3.png", style:"tertiary" },
  { title:"Pokemon4", image:"/pokemon4.png", style:"featured" },
  { title:"Pokemon5", image:"/pokemon5.png", style:"primary" },
  { title:"Pokemon6", image:"/pokemon6.png", style:"secondary" }
]

export default function Home() {

  return (
    <div className="home-grid">
      {pokemons.map((item:IHomeGridItem, index:number) => <HomeGridItem {...item} key={index}/>)}
    </div>
  );
  
}
