import { createStore } from 'vuex';

import authStore from '../modules/auth/store'

export default createStore({
    modules: {
        auth: authStore,
    }
})