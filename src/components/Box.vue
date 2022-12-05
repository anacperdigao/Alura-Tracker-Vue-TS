<!-- Aqui eu vou fazer o style de outra forma só para conhecimento -->
<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot> <!-- Slot é como se fosse o children -->
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Box',

    data () {
        return {
            estilos: {
                background: '#faf0ca'
            }
        }
    }
})

</script>


<!-- 

<style scoped>
.box{
    background: #faf0ca;
}
</style> 

-->