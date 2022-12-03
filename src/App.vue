<template>
  <!-- Essas classes são retiradas do Bulma, consultar a doc. -->
  <main class="columns is-gapless is-multiline"> 
    <div class="column is-one-quarter">
      <BarraLateral />
    </div> 
    <div class="column is-three-quarter">
      <FormularioPrincipal @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div> 
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioPrincipal from './components/FormularioPrincipal.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',

  //Dentro de data é onde eu vou colocar os estados que eu quero manipular
  data () {
    return {
        tarefas: [] as ITarefa[],
    }
  },

  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  },

  components: {
    BarraLateral,
    FormularioPrincipal,
    Tarefa
  }
});
</script>

<style>
.lista{
  padding: 1.25rem;
}
</style>
