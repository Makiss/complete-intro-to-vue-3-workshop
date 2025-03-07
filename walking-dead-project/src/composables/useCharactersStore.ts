import { reactive } from 'vue'

type Character = { name: string; features: string[] }
type Characters = Character[]

const state: {
  characters: Characters
  favoriteCharacters: Characters
  newCharacter: Character
} = reactive({
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
})

export const useCharactersStore = () => {
  const addToFavorite = (payload: Character) => {
    state.favoriteCharacters.push(payload)
  }

  const addNewCharacter = () => {
    state.characters.push({ ...state.newCharacter })
    state.newCharacter.name = ''
  }

  return { ...state, addToFavorite, addNewCharacter }
}
