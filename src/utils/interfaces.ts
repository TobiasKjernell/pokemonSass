export interface IHomeGridItem {
    title: string,
    image: string,
    style: string
}

export interface IPokemon {
    id: number,
    name: string,
    image:string,
    types:string[],
    onRemove?(s:number): void
}