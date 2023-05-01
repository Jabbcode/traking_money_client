<script setup>

import { onMounted } from 'vue';
import { GetAccounts } from '../../services/accounts.service';

const getAccounts = async () => {

    try {
        const { data } = await GetAccounts()

        console.log(data);

    } catch (error) {
        console.log(error);

    }

};

onMounted(() => {
    getAccounts()
});

</script>

<template>
    <h1>Home</h1>
</template>

<style></style>