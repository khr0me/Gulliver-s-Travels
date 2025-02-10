<template>
  <div class="welcome">
    <h1 class="green"><slot></slot></h1>
  </div>
</template>

<style scoped>
.welcome {
  margin: 0 auto;
  margin-top: 8rem;
  max-width: fit-content;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
