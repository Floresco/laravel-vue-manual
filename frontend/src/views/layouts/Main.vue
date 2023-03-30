<template>
    <main class="main-wrapper">
        <Header/>
        <router-view />
        <Footer/>
    </main>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";

</script>

<style scoped>

</style>
