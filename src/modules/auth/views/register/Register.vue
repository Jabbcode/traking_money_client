<script setup>

import { ref } from 'vue';
import { useRouter } from "vue-router";
import useAuth from '../../../../composables/useAuth';

const router = useRouter()
const { onRegister, authStatus } = useAuth();

const form = ref({
    email: 'test@test.com',
    password: '123456789'
});

const onSubmit = async () => {

    if (form.value.email === '') return alert('the field email is required');
    if (form.value.password === '') return alert('the field password is required');
    if (form.value.password.length < 8) return alert('password must have at least 8 characters');

    await onRegister(form.value);
    
    if (authStatus.value === 'Authenticated') {
        router.push({ name: 'Account' });
    }
};

</script>

<template>
    <h1>Register</h1>

    <form @submit.prevent="onSubmit" novalidate>
        <input type="text" name="email" placeholder="Email" v-model="form.email">
        <input type="password" name="password" placeholder="Password" v-model="form.password">
        <button type="submit">Register</button>
    </form>

    <router-link to="/login">Already have an account?</router-link>
</template>

<style></style>