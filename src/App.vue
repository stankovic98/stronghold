<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<script lang="ts">
// TODO hide navbar if on home
</script>

<style>
@import "@/assets/base.css";
</style>
