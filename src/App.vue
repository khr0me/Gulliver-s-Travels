<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import WelcomeTo from "./components/WelcomeItem.vue";
import GulliverTest from "./components/GulliverTest.vue";
import Dialog from "./components/Dialog.vue";
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <GulliverTest />

  <main>
    <Dialog>
      I viaggi di gulliver, descritti da Stefano Casonato e Lorenzo Poli, della
      classe 4°A dell'Istituto Vito Volterra, professoressa Piera Isgrò, San
      Donà di Piave.
    </Dialog>
  </main>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A</p>
  </footer>
</template>
