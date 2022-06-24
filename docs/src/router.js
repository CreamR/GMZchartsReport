import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: () => import('./components/Home.vue') },
        { path: '/home/login', component: () => import('./components/Login.vue')},
        { path:'/home/register', component: () => import('./components/Register.vue')},
        { path:'/home/application', component: () => import('./components/Application.vue')}

    ]
})

router.beforeEach((to, from) => {

})

export default router