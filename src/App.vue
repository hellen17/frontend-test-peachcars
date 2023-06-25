<script setup>
import Navbar from './components/Navbar.vue';

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const showNavbar = ref(true);

// Watch for route changes and update the shouldShowNavbar flag accordingly
watch(route, () => {
  const currentRoute = route.meta.showNavbar;
  showNavbar.value = typeof currentRoute === 'undefined' ? true : currentRoute;
});

</script>

<template>
  <Navbar v-if="showNavbar" />
  <RouterView />
</template>

<style>

</style>
