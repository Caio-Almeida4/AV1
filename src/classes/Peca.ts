import { StatusPeca } from "../enums/StatusPeca"
import { TipoPeca } from "../enums/TipoPeca"

export default class Peca {
    private nome: string
    private tipo: TipoPeca
    private fornecedor: string
    private status: StatusPeca

    constructor(nome: string, tipo: TipoPeca, fornecedor: string, status: StatusPeca) {
        this.nome = nome
        this.tipo = tipo
        this.fornecedor = fornecedor
        this.status = status
    }

    public atualizarStatus(novoStatus: StatusPeca): void {
        this.status = novoStatus
    }

    public salvar(): void {
        // Lógica para salvar a peça no registro
    }

    public carregar(): void {
        // Lógica para carregar a peça do registro 
    }


    
}