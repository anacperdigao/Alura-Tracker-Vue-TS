<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input 
                    type="text" 
                    class="input" 
                    v-model="nomeDoProjeto" 
                    id="nomeDoProjeto" 
                />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store'
import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/type-mutations';
import { TipoDeNotificacao } from '@/interfaces/INotificacao';
// import { notificacaoMixin } from '@/mixins/notificar'
import useNotificador from '@/hooks/notificador'


export default defineComponent({
    name: 'FormularioView',

    props: {
        id: {
            type: String
        }
    },

    mounted () {
        if(this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },

    data() {
        return{
            nomeDoProjeto: ''
        }
    },

    // Poderia utilizar o mixin, mas vou utilizar o hook customizado.
    // mixins: [notificacaoMixin],

    methods: {
        salvar () {
            if (this.id){
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.notificar(TipoDeNotificacao.SUCESSO, 'Excelente!', 'O projeto foi cadastrado com sucesso.')
            this.$router.push('/projetos')
        },
    },

    setup () {
        const store = useStore()
        const { notificar } = useNotificador()
        
        return{
            store,
            notificar
        }
    }
})

</script>