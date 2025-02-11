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

  <GulliverTest>Benvenuti! Di cosa volete parlare a riguardo di Gulliver?</GulliverTest>

  <main>
    <Dialog>
      <h3>REGOLAMENTO FORUM</h3>
      <p>
        Il forum è un luogo di discussione e confronto, dove è possibile
        condividere opinioni e idee (preferibilmente scolastici). <br/>
        È importante avere un comprtamento adeguato, e non offendere altre
        persone che vogliono prendere parte alla discussione
      </p>

      <p> Creato da: Casonato Stefano, Poli Lorenzo, 4°A. </p>
    </Dialog>

    <hr color="green-800" />
    <div class="insMsg">
      <h2>A cosa stai pensando?</h2>
      <input class="usr"
             type="text"
             maxlength=50
             placeholder="Come ti chiami?"
             require="required"
             
             v-model="username"
      />
      <input class="msg"
             type="text"

             maxlength=200
             placeholder="Un tuo pensiero?"
             require="required"
             v-model="message"
      />

      <button @click="sendMessage(username, message, addMessage)">Invia!</button>
    </div>

    <hr color="green-800" />
    <ForumDialog :messages="messages" />
  </main>

  <footer>
    <p>Stefano Casonato, Lorenzo Poli - 4°A</p>
  </footer>

</template>