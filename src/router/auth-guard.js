
import store from '../store';

export const isAuthenticatedGuard = async (to, from, next) => {
    const resp = await store.dispatch('auth/onVerifyToken');

    if (resp === 'Authenticated') next()
    else next({ name: 'Login' })
}

export const isAuthenticated = async (to, from, next) => {
    const resp = await store.dispatch('auth/onVerifyToken');

    if ((to.name === 'Login' || to.name === 'Register') && resp === 'Authenticated') {
        next({ name: 'Account' })
    }
    next()
}