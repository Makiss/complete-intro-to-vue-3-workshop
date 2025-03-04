<script>
export default {
  props: {
    characters: {
      type: Array,
      requred: true,
    },
  },
  data: () => ({
    newCharacter: {
      name: '',
      features: [],
    },
  }),
  methods: {
    addNewCharacter() {
      this.characters.push(this.newCharacter)
      this.newCharacter = {
        name: '',
      }
    },
  },
}
</script>

<template>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
