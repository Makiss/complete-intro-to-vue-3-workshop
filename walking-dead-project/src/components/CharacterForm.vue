<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['new-character'])

const state = reactive({
  newCharacter: {
    name: '',
    features: [],
  },
})

const addNewCharacter = () => {
  emit('new-character', state.newCharacter)
  state.newCharacter = {
    name: '',
    features: [],
  }
}
</script>

<template>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="state.newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
