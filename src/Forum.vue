<script setup lang="ts">
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";
  import Dialog from "./components/Dialog.vue";
  import ForumDialog from "./components/ForumDialog.vue";
  import { sendMessage } from "./assets/functions/forumButton.ts";
  import { ref, onMounted} from "vue";
  import axios from "axios";

  const messages = ref<{ username: string, text: string, timestamp: string }[]>([]);
  const username = ref("");
  const message = ref("");

  const fetch_message = async () => {
    try {
      const response = await axios.get("http://localhost:8086/api/messages");
      messages.value = response.data;
    } catch(error) {
      console.log("Error while fetching data", error);
    }
  };

  const add_message = async (newMessage: { username: string, text: string, timestamp: string}) => {
    try {
      await axios.post("http://localhost:8086/api/messages", newMessage);
      messages.value.push(newMessage);
      message.value = "";
    } catch(error) {
      console.log("Error while fetching data", error);
    }
  };

  onMounted(() => {
    fetch_message();
  });
</script>

<template>
  <link rel="stylesheet" type="text/css" href="./assets/App.css" />
  <Navbar />
  
  <Header>Benvenuti! Di cosa volete parlare a riguardo di Gulliver?</Header>
  <main>

    <Dialog>
      <h3>REGOLAMENTO FORUM</h3>
      <p>
        Il forum è un luogo di discussione e confronto, dove è possibile
        condividere opinioni e idee (preferibilmente scolastici). <br />
        È importante avere un comprtamento adeguato, e non offendere altre
        persone che vogliono prendere parte alla discussione
      </p>

      <p>Creato da: Casonato Stefano, Poli Lorenzo, 4°A.</p>
    </Dialog>

    <hr color="green-800" />
    <div class="FormMSG">
      <form @submit.prevent="add_message({ username: username, text: message, timestamp: new Date().toISOString() })"> 
          <h2>A cosa stai pensando?</h2> <br/>
          <input class="usr" v-model="username" type="text" maxlength=50 placeholder="Come ti chiami?" required />
          <textarea class="msg" v-model="message" maxlength=200 rows=10 cols=10 placeholder="Un tuo pensiero?" >  </textarea> 
      
          <button type="submit">Send!</button>   
      </form>
    </div>

    <hr color="green-800" />
    <ForumDialog :messages="messages" />
  </main>

  <footer>
    <p>Casonato Stefano, Poli Lorenzo, 4°A</p>
    <p>2025</p>
  </footer>
</template>

<style scoped>
  form {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    width: 1024px;
    justify-content: flex-start;
    align-content: flex-start; 
    align-items: center;
    margin: 0 auto;
  }

  button {
    width: 100px;
    height: 30px;
  }

  .usr, .msg {
    margin-bottom: 15px;
    width: 80%;
    padding: 10px;
    font-size: 1rem;
    text-align: left; 
    vertical-align: top; 
  }

</style>