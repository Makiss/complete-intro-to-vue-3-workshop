<script setup>
import { useCharactersStore } from '@/composables/useCharactersStore'

const { newCharacter, addNewCharacter } = useCharactersStore()
</script>

<template>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
