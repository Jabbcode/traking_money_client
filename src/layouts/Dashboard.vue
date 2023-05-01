<script setup>

import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';

</script>

<template>
    <main>
        <Header />
        <Sidebar />
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>