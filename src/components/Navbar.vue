<template>
  <div class="navbar">
    <nav>
      <a href="/">
        <h1>Gulliver's Travels</h1>
      </a>
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
  height: 4.5rem;
}

nav {
  display: flex;
}

a:default h1 {
  padding-bottom: 2rem;
  font-size: 1.5rem;
}

a {
  padding-left: 1rem;
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
