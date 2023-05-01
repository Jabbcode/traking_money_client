<script setup>

import { useRouter } from 'vue-router';
import useAuth from '../composables/useAuth';

const router = useRouter()
const { authStatus, onLogout } = useAuth();

const logout = async () => {
    await onLogout();

    if (authStatus !== 'Authenticated') {
        router.push({ name: 'Login' });
    }
};

</script>

<template>
    <header>
        <h1>Traking Money</h1>
        <button type="button" @click="logout">Close</button>
    </header>
</template>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}
</style>