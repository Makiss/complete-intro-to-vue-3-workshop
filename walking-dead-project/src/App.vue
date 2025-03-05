<script>
import CharacterForm from '@/components/CharacterForm.vue'
import Characters from '@/components/Characters.vue'
import FavoriteCharacters from '@/components/FavoriteCharacters.vue'
import CharacterStatistics from '@/components/CharacterStatistics.vue'

export default {
  components: {
    CharacterForm,
    Characters,
    FavoriteCharacters,
    CharacterStatistics,
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
  <CharacterStatistics :characters="characters" />
  <Characters :characters="characters" :favoriteCharacters="favoriteCharacters" />
  <FavoriteCharacters :favoriteCharacters="favoriteCharacters" />
  <CharacterForm @new-character="onNewCharacterAdd" />
</template>
