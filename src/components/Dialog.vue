<template>
  <div class="dialog">
    <slot></slot>
  </div>
</template>

<style scoped>
.dialog {
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 100%;
  font-size: 1.23rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
