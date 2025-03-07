<script setup>
import Pokemons from './components/Pokemons.vue'
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <Pokemons />
    <template #fallback>Loading...</template>
  </Suspense>
</template>
