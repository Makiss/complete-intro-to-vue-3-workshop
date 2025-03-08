import { defineStore } from 'pinia'

type Character = { name: string; features: string[] }
type Characters = Character[]

export const useNewCharactersStore = defineStore('CharactersStore', {
  // data
  state: () =>
    ({
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
      newCharacter: { name: '', features: [] },
    }) as {
      characters: Characters
      favoriteCharacters: Characters
      newCharacter: Character
    },
  // computed
  getters: {},
  // methods
  actions: {
    addToFavorite(payload: Character) {
      this.favoriteCharacters.push(payload)
    },
    addNewCharacter() {
      this.characters.push({ ...this.newCharacter })
      this.newCharacter.name = ''
    },
  },
})
