<script setup lang="ts">
import GulliverTest from "./components/GulliverTest.vue";
import Dialog from "./components/Dialog.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <Navbar />

  <GulliverTest>Benvenuti nel forum di Gulliver!</GulliverTest>

  <main>
    <Dialog>
        <h2>Regolamento del forum</h2>
        <p>Il forum è un luogo di discussione e confronto, dove è possibile condividere opinioni e idee.</p>
        <p>È importante rispettare le regole di buon comportamento e non offendere gli altri utenti.</p>
        <p>Chiunque violi le regole del forum sarà immediatamente bannato.</p>
    </Dialog>
  </main>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A </p>
  </footer>
</template>
