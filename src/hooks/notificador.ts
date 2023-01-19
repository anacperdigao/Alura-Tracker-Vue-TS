import { TipoDeNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store"
import { ADICIONA_NOTIFICACAO } from "@/store/type-mutations"

type Notificador = {
    notificar: (tipo: TipoDeNotificacao, titulo: string, texto: string) => void 
}

export default (): Notificador => {
    
    const notificar = (tipo: TipoDeNotificacao, titulo: string, texto: string) => {
        store.commit(ADICIONA_NOTIFICACAO, {
            titulo: titulo,
            texto: texto,
            tipo: tipo
        })
    }

    return {
        notificar
    }
}