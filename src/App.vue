<script setup>
import { currentPage } from '@/_data/page.js'

</script>

<template>
  <div id="app" :class="currentPage">
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>

#app {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* background-color: #fff;
  opacity: 0.7; */
  height: 100vh;
}

.inicio {
  background-image: url("@/assets/imagens/fundo.png" );
}
.lojas {
  background-image: url("@/assets/imagens/loja-fisica.png" );
}
.lavanderia{
  background-image: url("@/assets/imagens/fundo-lavanderia.png");
}
.costura{
  background-image: url("@/assets/imagens/fundo-costura.jpg");
}
.produtos{
  background-image: url("@/assets/imagens/fundo-produtos.png");
}
router-link:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
</style>