<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="font-brand uppercase text-5xl mt-4">{{ msg }}</h1>
</template>