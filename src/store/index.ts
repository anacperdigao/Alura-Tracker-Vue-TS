// Na store é onde eu vou colocar meus estados globais, e eu apenas setei a lista de projetos já com uma lista inicial.
// Depois preciso configurar uma chave de acesso pra nossa estore que é a const key. 
// Vale prestar atenção na tipagem da key, pq ela é uma InjectionKey que representa uma Store e essa Store é de 
// um tipo que é a interface Estado.

import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Typescript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            }
        ]
    }
})