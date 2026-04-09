import { NivelPermissao } from "../enums/NivelPermissao"

export default class Funcionario {
    private id: number
    private nome: string
    private telefone: string
    private endereco: string
    private usuario: string
    private senha: string
    private nivelPermissao: NivelPermissao

    constructor(id: number, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao) {
        this.id = id
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
        this.usuario = usuario
        this.senha = senha
        this.nivelPermissao = nivelPermissao
    }

    public autenticar(): void{
        // Lógica para autenticar o funcionário
    }

    public salvar(): void {
        // Lógica para salvar o funcionário no registro
    }

    public carregar(): void {
        // Lógica para carregar o funcionário do registro 
    }


}