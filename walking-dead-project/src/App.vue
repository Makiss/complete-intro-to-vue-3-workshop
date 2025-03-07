<script setup>
import CharacterForm from '@/components/CharacterForm.vue'
import Characters from '@/components/Characters.vue'
import FavoriteCharacters from '@/components/FavoriteCharacters.vue'
import CharacterStatistics from '@/components/CharacterStatistics.vue'
import BaseLayout from '@/components/BaseLayout.vue'
import { reactive } from 'vue'

const state = reactive({
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
})

const onNewCharacterAdd = (payload) => {
  state.characters.push(payload)
}
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <Characters :characters="state.characters" :favoriteCharacters="state.favoriteCharacters" />
      <FavoriteCharacters :favoriteCharacters="state.favoriteCharacters"
    /></template>
    <template v-slot:sidebar>
      <CharacterStatistics :characters="state.characters" />
      <CharacterForm @new-character="onNewCharacterAdd"
    /></template>
  </BaseLayout>
</template>
