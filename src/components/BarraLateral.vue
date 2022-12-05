<!-- Aqui vem todo o HTML do componente -->
<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Logo Alura Tracker">
        </h1>
        <button class="button" @click="alterarTema">
            {{textoBotao}}
        </button>
    </header>
</template>


<!-- Aqui vem o JS ou TS, sendo que eu também uso para exportar esse componente todo para usar em outro lugar -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',

    emits: ['aoTemaAlterado'],

    data () {
        return {
            modoEscuroAtivo: false
        }
    },

    computed: {
        textoBotao () {
            if (this.modoEscuroAtivo) {
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },

    methods: {
        alterarTema () {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    },
})
</script>


<!-- Aqui vem o CSS do componente -->
<style scoped>
header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
    padding: 1rem;
}

@media only screen and (max-width: 768px){
    header{
        padding: 2.5rem;
        height: auto;
    }
}

</style>