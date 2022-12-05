<!-- v-model é quem vai linkar o input com o estado -->
<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="descricao" 
                >
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
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
        }
    },

    // Uma lista de eventos que esse componente é capaz de emitir
    emits: ['aoSalvarTarefa'],

    methods: {
        finalizarTarefa (tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ""
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
