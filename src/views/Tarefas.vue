<template>
    <FormularioPrincipal @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
    
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    
        <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>
    
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioPrincipal from '../components/FormularioPrincipal.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
  name: 'App',

  //Dentro de data é onde eu vou colocar os estados que eu quero manipular
  data () {
    return {
        tarefas: [] as ITarefa[],
    }
  },

  computed: {
    listaEstaVazia (): boolean {
      return this.tarefas.length === 0
    }
  },

  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  },

  components: {
    FormularioPrincipal,
    Tarefa,
    Box
  }
});
</script>
