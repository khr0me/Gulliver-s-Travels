<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import WelcomeTo from "./components/WelcomeItem.vue";
import GulliverTest from "./components/GulliverTest.vue";
import Dialog from "./components/Dialog.vue";
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <GulliverTest />

  <Dialog> Gulliver è una persona davvero interessante... </Dialog>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A</p>
  </footer>
</template>
