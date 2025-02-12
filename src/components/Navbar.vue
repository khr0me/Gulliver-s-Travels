<template>
  <div class="above">

    <div class="navbar">
      <nav>
        <a href="/"> <h1>Gulliver's Travels</h1> </a>
        <ul>
          <li> <a href="/">Home</a> </li>
          <li> <a href="/forum">Forum</a> </li>
        </ul>
      </nav>
    </div>
  
  </div>
</template>

<script setup land="ts">

</script> 

<style scoped>
.above {
  background-color: #181818;
  position: fixed;
  width: 100%;
  height: 4.5rem;
  top: 0;
  z-index: 8;     /* Just Under the .navbar */
}
.navbar {
  background-color: #333;
  color: hsla(160, 100%, 37%, 1);

  border-radius: 1rem;  
  padding: 1rem;
  width: calc(100% - 3rem);
  height: 4.5rem;

  margin-top: 2rem;
  position: fixed;
  
  z-index: 10;
  top: 0;
}

nav {
  display: flex;
}

a:default > h1 {
  padding-bottom: 2rem;
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
