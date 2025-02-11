<template>
  <div class="navbar">
    <nav>
      <h1>Gulliver's Travels</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/forum">Forum</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #333;
  color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  border-radius: 1rem;
  width: calc(100% - 3rem);
  margin-top: 2rem;
  position: fixed;
  top: 0;
  z-index: 1;
}

nav {
  display: flex;
  align-items: center;
}

h1 {
  margin-left: 1rem;
  font-size: 1.5rem;
}

ul {
  display: flex;
  gap: 2rem;
  margin-left: auto;
  margin-right: 3rem;
  font-size: 1.2rem;
}

li {
  list-style: none;
}
</style>
