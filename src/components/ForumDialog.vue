<script setup lang="ts">
import { defineProps } from "vue";
import Dialog from "./Dialog.vue";

const props = defineProps<{ messages: { username: string; text: string }[] }>();
</script>

<template>
  <div class="forum-dialog">
    <h2>Ecco cosa si dice in giro!</h2>
    <Dialog v-for="(msg, index) in props.messages" :key="index">
      {{ msg.username }}: &nbsp; {{ msg.text }}
    </Dialog>
  </div>
</template>

<style scoped>
.forum-dialog {
  margin-top: 2rem;
  max-width: 400px;
  font-size: 1.2rem;
}

.dialog {
  margin: 2rem 0;
}
</style>
