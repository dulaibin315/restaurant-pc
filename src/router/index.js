import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import LoginComponent from "../pages/login/components/LoginComponent";
import HomeComponent from "../pages/home/components/HomeComponent";
const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: LoginComponent,

        },
        {
            path: '/home',
            component: HomeComponent,

        },
    ]
})

export default router
