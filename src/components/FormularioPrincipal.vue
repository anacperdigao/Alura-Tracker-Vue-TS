<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>{{tempoDecorrido}}</strong>
                    </section>
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormularioPrincipal',


    //Dentro de data é onde eu vou colocar os estados que eu quero manipular
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
        }
    },


    //Ele monitora uma informação, e conforme essa informação for alterada, ele vai reagir e vai atualizar
    computed: {
        tempoDecorrido () : string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
        }
    },


    //Dentro de methods são os métodos(funções) que eu vou utilizar nesse componente
    methods: {
        iniciar () {
            // essa função nativa do JS recebe 2 params, uma função que de fato quero fazer, e o tempo em milisegundos
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos = this.tempoEmSegundos + 1
            }, 1000)
        },
        finalizar () {
            clearInterval(this.cronometro)
        }
    }
})
</script>


<style scoped>

</style>
