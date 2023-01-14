<template>
    <header>
        <h1 class="has-text-centered">
            <img src="../assets/logo.png" alt="Logo Alura Tracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema">
                {{textoBotao}}
            </button>
        </div>

        <nav class="panel mt-5">
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


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


<style scoped>
header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 1rem;
}

.panel li{
    margin: 8px 0;
}

.link {
    color: #fff;
}

.link:hover{
    color: #faf0ca;
}

.link.router-link-active {
    color: #faf0ca;
}

@media only screen and (max-width: 768px){
    header{
        padding: 2.5rem;
        height: auto;
    }
}

</style>