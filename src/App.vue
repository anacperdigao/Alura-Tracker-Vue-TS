<template>
  <!-- Essas classes são retiradas do Bulma, consultar a doc. -->
  <main class="columns is-gapless is-multiline"> 
    <div class="column is-one-quarter">
      <BarraLateral />
    </div> 
    <div class="column is-three-quarter conteudo">
      <FormularioPrincipal @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        
        <!-- v-for é utilizado para renderizar N vezes um componente, como se fosse .map -->
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/> 
        
        <!-- v-if é utilizado para renderização condicional -->
        <Box v-if="listaEstaVazia"> 
        Você não está muito produtivo hoje :(
        </Box>
      
      </div>
    </div> 
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioPrincipal from './components/FormularioPrincipal.vue';
import Tarefa from './components/Tarefa.vue';
import Box from './components/Box.vue';
import ITarefa from './interfaces/ITarefa';

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
    BarraLateral,
    FormularioPrincipal,
    Tarefa,
    Box
  }
});
</script>

<style>
.lista{
  padding: 1.25rem;
}

main{
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primario);
}
</style>
