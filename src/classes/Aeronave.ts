import { TipoAeronave } from "../enums/TipoAeronave"

export default class Aeronave {
    private codigo: string
    private modelo: string
    private tipo: TipoAeronave
    private capacidade: number
    private alcance: number

    constructor(codigo: string, modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number) {
        this.codigo = codigo
        this.modelo = modelo
        this.tipo = tipo
        this.capacidade = capacidade
        this.alcance = alcance
    }

    public detalhes(): void {
        console.log(`Código: ${this.codigo}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Capacidade: ${this.capacidade} passageiros`)
        console.log(`Alcance: ${this.alcance} km`)
        
    }

    public salvar(): void {
        // Lógica para salvar a aeronave no registro
    }

    public carregar(): void {
        // Lógica para carregar a aeronave do registro
    }
}