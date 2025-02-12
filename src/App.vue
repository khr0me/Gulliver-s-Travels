<script setup lang="ts">
import GulliverTest from "./components/GulliverTest.vue";
import Dialog from "./components/Dialog.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <Navbar />

  <GulliverTest>Home - Blog Viaggi di Gulliver </GulliverTest>

  <main>
    <Dialog> Pazzerella Eraclea Mare </Dialog>

    <hr color="green-800" />
  </main>

  <footer>
    <p>Casonato Stefano, Poli Lorenzo, 4°A</p>
    <p>2025</p>
  </footer>
</template>
