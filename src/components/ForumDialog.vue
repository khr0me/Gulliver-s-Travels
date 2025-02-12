<script setup lang="ts">
  import { defineProps } from "vue";
  import Dialog from "./Dialog.vue";

  const props = defineProps<{
    messages: { username: string; text: string; timestamp: string }[]; 
  }>();
  
</script>

<template>
  <div class="forum-dialog">
    <h2>Ecco cosa si dice in giro!</h2>
    <Dialog v-for="(msg, index) in props.messages" :key="index">
      <strong>{{ msg.username }}</strong>: &nbsp;
              {{ msg.text }}
      <p>
              {{ msg.timestamp }}
      </p>
    </Dialog>
  </div>
</template>

<style scoped>
.forum-dialog {
  margin-top: 2rem;
  max-width: 800px;
  font-size: 1.2rem;
}

.dialog {
  margin: 2rem 0;
}
h4 {
  margin: 2.2rem 0;
}
</style>
