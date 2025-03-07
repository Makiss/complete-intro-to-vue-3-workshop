<script setup>
import { computed, defineProps } from 'vue'

const { characters } = defineProps({
  characters: {
    type: Array,
    requred: true,
  },
})

const featureStatistics = computed(() => {
  return characters.reduce((acc, character) => {
    for (const feature of character.features) {
      const featureLowerCased = feature.toLowerCase()
      if (!(featureLowerCased in acc)) {
        acc[featureLowerCased] = 0
      }

      acc[featureLowerCased] += 1
    }

    return acc
  }, {})
})
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(count, feature) in featureStatistics">
      {{ feature[0].toUpperCase() + feature.slice(1) }}: {{ count }}
    </li>
  </ul>
</template>
