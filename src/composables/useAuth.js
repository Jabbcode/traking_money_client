import { computed } from 'vue';
import { useStore } from 'vuex';

const useAuth = () => {

    const store = useStore();

    const onLogin = async (formData) => await store.dispatch('auth/onLogin', formData);

    const onRegister = async (formData) => await store.dispatch('auth/onRegister', formData);

    const onLogout = async () => await store.dispatch('auth/onLogout');

    const onVerifyToken = async () => await store.dispatch('auth/onVerifyToken');

    return {
        onLogin,
        onRegister,
        onLogout,
        onVerifyToken,

        user: computed(() => store.getters['auth/dataUser']),
        authStatus: computed(() => store.getters['auth/authStatus'])
    }

};

export default useAuth;