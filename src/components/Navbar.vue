<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <p>LOGO</p>
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/mass">Mass</RouterLink>
      <RouterLink class="link" to="/catechism">Catechism</RouterLink>
      <RouterLink class="link" to="/lectures">Lectures</RouterLink>
      <RouterLink class="link" to="/songs">Chants and Songs</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: grid;
  grid-template-columns: minmax(300px, 1fr);
  grid-auto-flow: column;
}

.link {
  border: 2px solid lightcoral;
  border-radius: 7px;
  padding: 5px 10px;
}
</style>
