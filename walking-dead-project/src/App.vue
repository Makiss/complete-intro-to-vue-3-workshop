<script>
import CharacterForm from '@/components/CharacterForm.vue'
import Characters from '@/components/Characters.vue'
import FavoriteCharacters from '@/components/FavoriteCharacters.vue'
import CharacterStatistics from '@/components/CharacterStatistics.vue'
import BaseLayout from '@/components/BaseLayout.vue'

export default {
  components: {
    CharacterForm,
    Characters,
    FavoriteCharacters,
    CharacterStatistics,
    BaseLayout,
  },
  data: () => ({
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
  methods: {
    onNewCharacterAdd(payload) {
      this.characters.push(payload)
    },
  },
}
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <Characters :characters="characters" :favoriteCharacters="favoriteCharacters" />
      <FavoriteCharacters :favoriteCharacters="favoriteCharacters"
    /></template>
    <template v-slot:sidebar>
      <CharacterStatistics :characters="characters" />
      <CharacterForm @new-character="onNewCharacterAdd"
    /></template>
  </BaseLayout>
</template>
