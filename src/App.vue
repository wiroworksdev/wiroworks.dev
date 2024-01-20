<script setup lang="ts">
import About from './components/About.vue';
import Navbar from './components/Navbar.vue';

// Declare variables like companyName
var companyName = 'Wiroworks';
</script>

<template>
  <Navbar />
  <div class="mt-7 flex items-center justify-center">
    <div class="flex flex-col items-center">
      <a href="https://wiroworks.dev/" class="text-center">
        <img src="./assets/img/logo.svg" class="logo" width="200" alt="{{ companyName }} logo" />
      </a>
      <h1 class="font-brand uppercase text-5xl mt-4">{{ companyName }}</h1>
    </div>
  </div>
  <About />
</template>