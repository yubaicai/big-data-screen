import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/left1',
        name: 'left1',
        component: () => import('../components/leftchart/left-1.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
