<script>
export default {
  data: () => ({
    newCharacter: {
      name: '',
      features: [],
    },
    characters: [
      { name: 'Rick', features: ['Leader', 'Strong', 'Kind'] },
      { name: 'Maggie', features: ['Leader', 'Clever', 'Kind'] },
      { name: 'Michonne', features: ['Strong', 'Agile', 'Kind'] },
      {
        name: 'Negan',
        features: ['Leader', 'Strong', 'Cunning', 'Cruel'],
      },
    ],
    favoriteCharacters: [],
  }),
  computed: {
    featureStatistics() {
      const features = ['Leader', 'Strong', 'Kind', 'Cunning', 'Cruel', 'Clever', 'Agile']

      return this.characters.reduce((acc, character) => {
        for (const feature of character.features) {
          const featureLowerCased = feature.toLowerCase()
          if (!(featureLowerCased in acc)) {
            acc[featureLowerCased] = 0
          }

          acc[featureLowerCased] += 1
        }

        return acc
      }, {})
    },
  },
  methods: {
    toggleFavorite(character) {
      this.favoriteCharacters.push(character)
    },
    addNewCharacter(event) {
      this.characters.push(this.newCharacter)
      this.newCharacter = {
        name: '',
      }
    },
  },
}
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(count, feature) in featureStatistics">
      {{ feature[0].toUpperCase() + feature.slice(1) }}: {{ count }}
    </li>
  </ul>
  <h2>Characters</h2>
  <ul v-if="characters.length > 0">
    <li v-for="character in characters">
      <p>{{ character.name }}</p>
      <button @click="toggleFavorite(character)">Favorite</button>
    </li>
  </ul>
  <p v-else>There are no characters</p>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteCharacters.length > 0">
    <li v-for="character in favoriteCharacters">{{ character.name }}</li>
  </ul>
  <p v-else>There are no favorite characters</p>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
