<template>
  <div class="banner">
    <img src="https://picsum.photos/800/600" alt="banner" />
    <div class="text">
      <h1>Welcome to Stronghold of faith</h1>
      <h2>
        All the basics of sacred faith on one place, learn it by the heart,
        click what you want to learn:
      </h2>
      <div class="buttons">
        <button>Sacred Mass</button>
        <button>Catholic Faith</button>
        <button>Watch Lessions from Youtube</button>
        <button>Beautiful Chants and songs</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: grid;
  height: 100vh;
  /* overflow: hidden; */
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: stretch;
  align-items: stretch;
}
img {
  grid-row: 1 / -1;
  grid-column: 1/ -1;
  object-fit: fill;
  max-height: 100vh;
}
.text {
  position: relative;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  justify-self: center;
  display: grid;
  justify-items: center;
  align-content: center;
}
</style>
