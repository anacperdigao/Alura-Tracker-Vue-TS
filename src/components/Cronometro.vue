<template>
    <section>
        <strong class="display">{{tempoDecorrido}}</strong>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Cronometro',

    //Aqui eu recebo informação do componente Pai que é o Formulario
    //Primeiro eu digo o nome da props, depois o tipo e qual o valor padrão
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },

    //Ele monitora uma informação, e conforme essa informação for alterada, ele vai reagir e vai atualizar
    computed: {
        tempoDecorrido () : string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
        },
    },  
})

</script>


<style scoped>

.display{
    color: var(--texto-primario)
}

</style>