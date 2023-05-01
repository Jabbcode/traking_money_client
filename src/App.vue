<script setup>

import useAuth from './composables/useAuth';

const { authStatus, onVerifyToken } = useAuth();

onVerifyToken();

</script>

<template>
  <div v-if="authStatus === 'Authenticating'">Loading...</div>
  <router-view v-else />
</template>

<style scoped></style>
