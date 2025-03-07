<script setup>
import { useCharactersStore } from '@/composables/useCharactersStore'

const { favoriteCharacters } = useCharactersStore()
</script>

<template>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteCharacters.length > 0">
    <li v-for="character in favoriteCharacters">{{ character.name }}</li>
  </ul>
  <p v-else>There are no favorite characters</p>
</template>
