export interface Celular {
    id: number;
    nome: string;
    descricao?: string; // o ? serve para indicar que é um valor opcional
    esgotado: boolean;
}