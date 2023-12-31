import { ref } from 'vue'

const sacola = ref({
    itens: [],
    total: 0
  })
  
  function atualizaQuantidadeItem(item) {
    sacola.value.total -= item.total
    item.total = item.preco * item.quantidade
    sacola.value.total += item.total
  }
  
  function removerItemSacola(item) {
    const index = sacola.value.itens.findIndex((i) => i.id === item.id)
    sacola.value.total -= item.total
    sacola.value.itens.splice(index, 1)
  }
  
  function adicionarASacola(produto) {
    const index = sacola.value.itens.findIndex((item) => item.id === produto.id)
    if (index === -1) {
      sacola.value.itens.push({
        ...produto,
        quantidade: 1,
        total: produto.preco
      })
      sacola.value.total += produto.preco
    } else {
      sacola.value.itens[index].quantidade++
      sacola.value.itens[index].total += produto.preco
      sacola.value.total += produto.preco
    }
  }
  export {sacola, atualizaQuantidadeItem, removerItemSacola, adicionarASacola}