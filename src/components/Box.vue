<template>
    <div class="box has-text-weight-bold">
        <slot></slot> <!-- Slot é como se fosse o children -->
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Box'
})

</script>


<style scoped>
.box{
    background: #faf0ca;
}

</style>