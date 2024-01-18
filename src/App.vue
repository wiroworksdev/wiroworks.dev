<script setup lang="ts">
import About from './components/About.vue';
import Home from './components/Home.vue'
</script>

<template>
  <div class="mt-7 flex items-center justify-center">
    <div class="flex flex-col items-center">
      <a href="https://wiroworks.dev/" class="text-center">
        <img src="./assets/logo.svg" class="logo" width="200" alt="Wiroworks logo" />
      </a>
      <Home msg="Wiroworks" />
    </div>
  </div>
  <About />
</template>