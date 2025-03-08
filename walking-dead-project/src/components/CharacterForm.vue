<script setup>
import { useNewCharactersStore } from '@/stores/CharacterStore'

const { newCharacter, addNewCharacter } = useNewCharactersStore()
</script>

<template>
  <h2>New Character</h2>
  <label for="characterName">Name</label>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
</template>
