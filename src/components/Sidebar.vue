<script setup>

const links = [
    {
        title: 'Account',
        to: 'Account'
    },
    {
        title: 'Movements',
        to: 'Movements',
    },
    {
        title: 'Profile',
        to: 'Profile'
    },
];

</script>

<template>
    <aside>
        <ul>
            <router-link class="link" v-for="(item, index) in links" :to="{ name: item.to }">
                <span>{{ item.title }}</span>
            </router-link>
        </ul>
    </aside>
</template>


<style scoped>
.link {
    margin: 5px;
    font-style: none;
    text-decoration: none;
}

.link:hover {
    border-bottom: 1px solid #000;
}
</style>