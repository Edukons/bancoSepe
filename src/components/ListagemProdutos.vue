<script setup>
import { produtos } from '@/_data/produtos.js'
import { adicionarASacola } from '@/_data/sacola.js'
import CardProduto from '@/components/CardProduto.vue'
</script>

<template>
    <div class="listagem-produtos">
        <CardProduto v-for="produto in produtos" v-bind:key="produto.id" v-bind:produto="produto"
            @adicionarASacola="adicionarASacola" />
    </div>
</template>


<style scoped>
.listagem-produtos {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
}
</style>