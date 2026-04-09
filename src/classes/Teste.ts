import { ResultadoTeste } from "../enums/ResultadoTeste";
import { TipoTeste } from "../enums/TipoTeste";

export default class Teste {
    private tipo: TipoTeste
    private resultado: ResultadoTeste

    constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
        this.tipo = tipo
        this.resultado = resultado
    }

    public salvar(): void {
        // Lógica para salvar o teste no registro
    }

    public carregar(): void {
        // Lógica para carregar o teste do registro 
    }
}