<script setup lang="ts">
import GulliverTest from "./components/GulliverTest.vue";
import Dialog from "./components/Dialog.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <Navbar />

  <GulliverTest>Benvenuti nel sito di Gulliver!</GulliverTest>

  <main>
    <Dialog>
      I viaggi di gulliver, descritti da Stefano Casonato e Lorenzo Poli, della
      classe 4°A dell'Istituto Vito Volterra, professoressa Piera Isgrò, San
      Donà di Piave.
    </Dialog>

    <hr color="green-800">
  </main>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A</p>
  </footer>
</template>
