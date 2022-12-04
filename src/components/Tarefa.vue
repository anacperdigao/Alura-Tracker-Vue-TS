<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tarefa',

    //Aqui eu recebo informação do componente Pai
    //Primeiro eu digo o nome da props, depois o tipo e qual o valor padrão
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },

    components: {
        Cronometro,
    }
})

</script>


<style scoped>
.box{
    background: #faf0ca;
}

</style>