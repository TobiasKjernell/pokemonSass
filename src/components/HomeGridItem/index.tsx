import { IHomeGridItem } from "@/utils/interfaces";
import Image from "next/image";

const HomeGridItem = ({title, image, style}:IHomeGridItem) => {
    return (
        <div className={`home-grid__item ${style}`}>
            <h3>{title}</h3>
            <Image src={image} alt="pokemon" height={800} width={1000} />
        </div>
    )
}

export default HomeGridItem;