<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <!-- Prestar atenção nos dois pontos antes de tempoEmSegundos pq é assim que linka com um estado -->
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <!-- Prestar atenção nos dois pontos antes de disabled pq é assim que linka com um estado -->
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent ({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Temporizador',

    // Uma lista de eventos que esse componente é capaz de emitir
    emits: ['aoTemporizadorFinalizado'],

    //Dentro de data é onde eu vou colocar os estados que eu quero manipular
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        }
    },


    //Dentro de methods são os métodos(funções) que eu vou utilizar nesse componente
    methods: {
        iniciar () {
            // essa função nativa do JS recebe 2 params, uma função que de fato quero fazer, e o tempo em milisegundos
            this.cronometro = setInterval(() => {
                this.cronometroRodando = true
                this.tempoEmSegundos = this.tempoEmSegundos + 1
            }, 1000)
        },
        finalizar () {
            this.cronometroRodando= false
            clearInterval(this.cronometro)
            // Esse metodo $emit recebe dois params: 
            // (nome do evento que vai emitir, payload que é a carga de dados que vai junto)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    },

    components: {
        Cronometro,
    }
})

</script>


<style>


</style>