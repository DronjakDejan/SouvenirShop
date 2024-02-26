// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ContactView from '@/views/ContactView.vue'
import ItemView from '@/views/ItemView.vue'
import AboutView from '@/views/AboutView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView

  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView

  },
  {
    path: '/item/:id',
    name: 'item',
    component:ItemView

  } ,
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
