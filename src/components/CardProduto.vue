<script setup>
const props = defineProps({
  produto: Object
})
const emit = defineEmits(['adicionarASacola'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
import MeuBotao from '@/components/MeuBotao.vue'
</script>

<template>
  <div class="card-produto">
      <div class="wrap-produto">
        <img :src="props.produto.imagem" alt="Produto" class="produto" />
        <p class="titulo-produto">{{ props.produto.descricao }}</p>
        <p class="preco-produto">{{ formatarPreco(props.produto.preco) }}</p>
      </div>
    <div class="card-buttons-produtos" style="font-size: 20px;">
      <meu-botao class="info" @click="emit('adicionarASacola', props.produto)" style="font-size: 20px;">Adicionar a
        Sacola</meu-botao>
    </div>
  </div>
</template>
<style scoped>
.card-produto:hover{
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.418);
}+-
img {
  width: 300px;
  height: 200px;
}

.preco-produto {
  color: #00B0C2;
  text-align: center;
  font-size: 25px;
  margin: 10px;
  align-items: center;
}

.card-produto {
  margin: 100px;
  padding: 10px;
  border-radius: 10px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  color: #4B4B4B;
  height: 24rem;
  overflow: hidden;
  transition: .5s all
}

.wrap-produto {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex: 1;
}

.produto {
  width: 90%;
  max-height: 100%;
}

.card-produto p {
  margin: 0;
}

.card-produto .titulo-produto {
  margin-bottom: 5px;
  text-align: center;
}

.card-buttons-produtos {
  font-size: 30px;
}</style>