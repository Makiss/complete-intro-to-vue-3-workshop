<script>
export default {
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
    toggleFavorite(character) {
      this.favoriteCharacters.push(character)
    },
  },
}
</script>

<template>
  <h2>Characters</h2>
  <ul v-if="characters.length > 0">
    <li v-for="character in characters">
      <p>{{ character.name }}</p>
      <button @click="toggleFavorite(character)">Favorite</button>
    </li>
  </ul>
  <p v-else>There are no characters</p>
</template>
