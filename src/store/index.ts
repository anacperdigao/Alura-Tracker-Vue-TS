// Na store é onde eu vou colocar meus estados globais, e eu apenas setei a lista de projetos já com uma lista inicial.
// Depois preciso configurar uma chave de acesso pra nossa estore que é a const key. 
// Vale prestar atenção na tipagem da key, pq ela é uma InjectionKey que representa uma Store e essa Store é de 
// um tipo que é a interface Estado.

import { INotificacao, TipoDeNotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./type-mutations";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            {
                id: 1,
                texto: 'Uma notificação de sucesso.',
                titulo: 'Sucesso',
                tipo: TipoDeNotificacao.SUCESSO
            },
            {
                id: 2,
                texto: 'Uma notificação de atenção.',
                titulo: 'Atenção',
                tipo: TipoDeNotificacao.ATENCAO
            },
            {
                id: 3,
                texto: 'Uma notificação de falha.',
                titulo: 'Falha',
                tipo: TipoDeNotificacao.FALHA
            }
        ]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },

        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },

        [EXCLUIR_PROJETO](state, id: string) {
            const index = state.projetos.findIndex(proj => proj.id == id)
            state.projetos.splice(index, 1)
        },


    }
})

// Aqui vou criar tipo um hook personalizado e só fiz isso pra facilitar na hora de usar no outros componentes,
// pq nao preciso importar o useStore e key separados, eu ja juntei e mandei juntos
 
export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}