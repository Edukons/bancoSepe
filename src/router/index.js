import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import LojasView from '../views/LojasView.vue'
import LavanderiaView from '../views/LavanderiaView.vue'
import CosturaView from '../views/CosturaView.vue'
import TingimentoView from '../views/TingimentoView.vue'
import ProdutosView from '../views/ProdutosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/lojas',
      name: 'lojas',
      component: LojasView
    },
    {
      path: '/lavanderia',
      name: 'lavanderia',
      component: LavanderiaView
    },
    {
      path: '/costura',
      name: 'costura',
      component: CosturaView
    },
    {
      path: '/tingimento',
      name: 'tingimento',
      component: TingimentoView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView
    },
  ]
})

export default router