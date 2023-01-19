import { TipoDeNotificacao } from "@/interfaces/INotificacao"
import { ADICIONA_NOTIFICACAO } from "@/store/type-mutations"
import { store } from '@/store'

export const notificacaoMixin = {
    methods: {
        notificar (tipo: TipoDeNotificacao, titulo: string, texto: string) {
            store.commit(ADICIONA_NOTIFICACAO, {
                titulo: titulo,
                texto: texto,
                tipo: tipo
            })
        }
    }
}