<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  data: () => ({
    pokedex: [1, 2, 3],
  }),
  methods: {
    async fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      this.pokedex = await response.json()
    },
  },
  created() {
    this.fetchPokemon()
  },
}
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedex }}</pre>
</template>
