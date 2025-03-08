<script setup>
import { useNewCharactersStore } from '@/stores/CharacterStore'

const { favoriteCharacters } = useNewCharactersStore()
</script>

<template>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteCharacters.length > 0">
    <li v-for="character in favoriteCharacters">{{ character.name }}</li>
  </ul>
  <p v-else>There are no favorite characters</p>
</template>
