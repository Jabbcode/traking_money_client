import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticatedGuard, isAuthenticated } from './auth-guard';

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'Login',
        path: '/login',
        beforeEnter: [isAuthenticated],
        component: () => import('../modules/auth/views/login/Login.vue')
    },
    {
        name: 'Register',
        path: '/register',
        beforeEnter: [isAuthenticated],
        component: () => import('../modules/auth/views/register/Register.vue')
    },
    {
        path: '/home',
        component: () => import('../layouts/Dashboard.vue'),
        beforeEnter: [isAuthenticatedGuard],
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import('../modules/home/Home.vue'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../components/NotPageFound.vue')
    }
]


const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;