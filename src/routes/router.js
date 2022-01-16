import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import FavoritePage from '../views/FavoritePage'
import WatchPage from '../views/WatchPage'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: HomePage},
    {path: '/favorites/:userid', name:'favorites', component: FavoritePage, props: true},
    {path: '/watch', component: WatchPage},
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;