import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/HomePage.vue';
import Login from '@/pages/LoginPage.vue';
// import NotFound from '@/pages/NotFoundPage.vue';

// Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
        // redirect: '/login'
    },
    // {
    //     path: '*',
    //     name: 'NotFound',
    //     component: NotFound,
    // },
    {
        path: '/login',
        component: Login,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;