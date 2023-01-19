<!-- v-model é quem vai linkar o input com o estado -->
<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="descricao" 
                >
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option 
                            :value="projeto.id"
                            v-for="projeto in projetos"
                            :key="projeto.id"
                        >
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { TipoDeNotificacao } from '@/interfaces/INotificacao';
import { key, store } from '@/store';
import { ADICIONA_NOTIFICACAO } from '@/store/type-mutations';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioPrincipal',

    components: {
        Temporizador,
    },

    //Dentro de data é onde eu vou colocar os estados que eu quero manipular
    data () {
        return {
            descricao: "",
            idProjeto: ""
        }
    },

    // Uma lista de eventos que esse componente é capaz de emitir para o componente Pai
    emits: ['aoSalvarTarefa'],

    methods: {
        finalizarTarefa (tempoDecorrido: number): void {
            if (!this.projetos.find(proj => proj.id == this.idProjeto)) {
                store.commit(ADICIONA_NOTIFICACAO, {
                titulo: 'Ops.',
                texto: 'Tarefa não pode ser finalizada sem projeto.',
                tipo: TipoDeNotificacao.FALHA
            })
            } else {
                this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
                })
            }

            this.descricao = ""
        }
    },

    setup () {
        const store = useStore(key)
        return{
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>

<!-- Nao vou colocar scoped de proposito pq quero que ele passe para os componentes filhos -->
<style>

.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

</style>
