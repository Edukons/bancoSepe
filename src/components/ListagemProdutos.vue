<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

// import { produtos } from '@/_data/produtos.js'
import { adicionarASacola } from '@/_data/sacola.js'
import CardProduto from '@/components/CardProduto.vue'

const produtos =  ref([])


async function getProdutos() {
    const { data, error } = await supabase.from('produtos').select()
    produtos.value = data
  }

  onMounted(() => {
    getProdutos()
  })

</script>

<template>
    <div class="listagem-produtos">
        <CardProduto v-for="produto in produtos" :key="produto.pk_produto" :produto="produto"
            @adicionarASacola="adicionarASacola" />
    </div>
</template>


<style scoped>
.listagem-produtos {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
}
</style>