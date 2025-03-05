<script>
import Character from '@/components/Character.vue'

export default {
  components: {
    Character,
  },
  props: {
    characters: {
      type: Array,
      requred: true,
    },
    favoriteCharacters: {
      type: Array,
      requred: true,
    },
  },
  methods: {
    addToFavorite(payload) {
      this.favoriteCharacters.push(payload)
    },
  },
}
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
