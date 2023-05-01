<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useAuth from '../../../../composables/useAuth';

const { onLogin, authStatus } = useAuth();
const router = useRouter();

const form = ref({
    email: 'test@test.com',
    password: '123456789'
});

const onSubmit = async () => {

    if (form.value.email === '') return alert('the field email is required');
    if (form.value.password === '') return alert('the field password is required');
    if (form.value.password.length < 8) return alert('password must have at least 8 characters');

    await onLogin(form.value);

    if (authStatus.value === 'Authenticated') {
        router.push({ name: 'Home' });
    }
};

</script>

<template>
    <h1>Login</h1>

    <form @submit.prevent="onSubmit" novalidate>
        <input type="text" name="email" placeholder="Email" v-model="form.email">
        <input type="password" name="password" placeholder="Password" v-model="form.password">
        <button type="submit">Log In</button>
    </form>

    <router-link to="/register">Don't have an account?</router-link>
</template>

<style></style>