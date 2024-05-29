import Categoria from "./Categoria";

export default interface Produto {

    id: number;
    nome: string;
    preço: string;
    foto: string;
    categoria: Categoria | null
}