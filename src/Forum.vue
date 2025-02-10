<script setup lang="ts">
import GulliverTest from "./components/GulliverTest.vue";
import Navbar from "./components/Navbar.vue";
import Dialog from "./components/Dialog.vue";
import ForumDialog from "./components/ForumDialog.vue";
import { sendMessage } from "./assets/functions/forumButton.ts";
import { ref } from "vue";

// Stato per i messaggi, l'username e il messaggio corrente
const messages = ref<{ username: string; text: string }[]>([]);
const username = ref("");
const message = ref("");

// Funzione per aggiungere un messaggio alla lista
const addMessage = (newMessage: { username: string; text: string }) => {
  messages.value.push(newMessage);
  message.value = ""; // Pulisce l'input del messaggio
};
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />

  <Navbar />

  <GulliverTest>Benvenuti nel forum di Gulliver!</GulliverTest>

  <main>
    <Dialog>
      <h2>Regolamento del forum</h2>
      <p>
        Il forum è un luogo di discussione e confronto, dove è possibile
        condividere opinioni e idee.
      </p>
      <p>
        È importante rispettare le regole di buon comportamento e non offendere
        gli altri utenti.
      </p>
    </Dialog>

    <hr color="green-800" />

    <div class="insMsg">
      <h2>Inserisci un messaggio...</h2>
      <input
        class="usr"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="msg"
        type="text"
        placeholder="Messaggio"
        v-model="message"
      />
      <button @click="sendMessage(username, message, addMessage)">Invia</button>
    </div>

    <hr color="green-800" />

    <ForumDialog :messages="messages" />
  </main>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A</p>
  </footer>
</template>
