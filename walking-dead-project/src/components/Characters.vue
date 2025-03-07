<script setup>
import Character from '@/components/Character.vue'
import { useCharactersStore } from '@/composables/useCharactersStore'

const { characters, addToFavorite } = useCharactersStore()
</script>

<template>
  <h2>Characters</h2>
  <ul v-if="characters.length > 0">
    <li v-for="character in characters">
      <Character @add-to-favorite="addToFavorite" :character="character" />
    </li>
  </ul>
  <p v-else>There are no characters</p>
</template>
