import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticatedGuard, isAuthenticated } from './auth-guard';

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../modules/auth/views/login/Login.vue'),
        meta: { title: 'Login' },
        beforeEnter: [isAuthenticated],
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../modules/auth/views/register/Register.vue'),
        meta: { title: 'Register' },
        beforeEnter: [isAuthenticated],
    },
    {
        path: '/',
        component: () => import('../layouts/Dashboard.vue'),
        beforeEnter: [isAuthenticatedGuard],
        children: [
            {
                path: '',
                name: 'Account',
                meta: { title: 'Traking Money - Account' },
                component: () => import('../modules/account/Account.vue'),
            },
            {
                path: 'movements',
                name: 'Movements',
                meta: { title: 'Traking Money - Movements' },
                component: () => import('../modules/movements/Movements.vue'),
            },
            {
                path: 'profile',
                name: 'Profile',
                meta: { title: 'Traking Money - Profile' },
                component: () => import('../modules/profile/Profile.vue'),
            },
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Traking Money'
    next()
})

export default router;