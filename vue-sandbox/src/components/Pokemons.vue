<script setup>
import { reactive } from 'vue'

const state = reactive({
  pokedex: [1, 2, 3],
})

const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  return await response.json()
}

state.pokedex = await fetchPokemon()
</script>

<template>
  <pre>{{ state.pokedex }}</pre>
</template>
