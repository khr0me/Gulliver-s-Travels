<!-- <script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script> -->

<template>
  <div class="welcome">
    <h1 class="green">Welcome To Gulliver's WebSite!</h1>
  </div>
</template>

<style scoped>
.welcome {
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: fit-content;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
