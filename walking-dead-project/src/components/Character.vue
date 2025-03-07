<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['add-to-favorite'])
const onAddToFavorite = () => {
  emit('add-to-favorite', props.character)
}
</script>

<template>
  <p>{{ character.name }}</p>
  <button @click="onAddToFavorite">Favorite</button>
</template>
