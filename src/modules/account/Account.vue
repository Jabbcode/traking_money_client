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
    <h2>Account</h2>
</template>

<style></style>