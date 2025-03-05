<script>
export default {
  data: () => ({
    newCharacter: {
      name: '',
      features: [],
    },
  }),
  methods: {
    addNewCharacter() {
      this.$emit('new-character', this.newCharacter)
      this.newCharacter = {
        name: '',
      }
    },
  },
  emits: ['new-character'],
}
</script>

<template>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
