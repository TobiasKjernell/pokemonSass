'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILinks {
    name:string,
    url:string
}

const links:ILinks[] =
    [{
        name: "home",
        url: "/"
    },
    {
        name: "pokemon",
        url: "/pokemon"
    },
    {
        name: "types",
        url: "/types"
    },
    {
        name: "about",
        url: "/about"
    }]


const Navigation = () => {
    const path:string = usePathname()

    return (
        <nav className="menu">
            {links.map((item:ILinks, index:number) => <Link className={`menu__item--${item.name} ${path === item.url ? 'active' : ""}`} href={item.url} key={index}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation;