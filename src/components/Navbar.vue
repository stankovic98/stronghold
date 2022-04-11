<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <p>LOGO</p>
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/mass">Mass</RouterLink>
      <RouterLink class="link" to="/catechism">Catechism</RouterLink>
      <RouterLink class="link" to="/songs">Chants and Songs</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
p {
  grid-column: span 5;
}
.link {
  border: 2px solid lightcoral;
  border-radius: 7px;
  padding: 5px 10px;
}
</style>
