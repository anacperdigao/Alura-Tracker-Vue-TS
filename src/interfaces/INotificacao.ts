export enum TipoDeNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}


export interface INotificacao {
    titulo: string
    texto: string
    tipo: TipoDeNotificacao
    id: number
}