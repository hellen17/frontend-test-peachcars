<script setup>
import CTA from '../components/CTA.vue';
import Posts from '../components/Posts.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <main class="container">
    <h1 class="py-4">Dashboard</h1>
    <CTA />
    <h2 class="py-4">Latest</h2>
    <Posts />
  </main>
</template>

<style lang="scss" scoped>

.container {
  background-color: #EDEAE7;
  padding: 0px 30px 20px 30px;
  height: 100%;

}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

</style>