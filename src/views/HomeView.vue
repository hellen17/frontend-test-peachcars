<script setup>
import CTA from '../components/CTA.vue';
import Posts from '../components/Posts.vue';
</script>

<template>
  <main class="container">
    <h1 class="py-4 title">Dashboard</h1>
    <CTA />
    <h2 class="py-4 title">Latest</h2>
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
.title{
  color:  #595959;
  font-size: 14px;
  font-weight: 600;
  line-height: 24.466px;
}


</style>