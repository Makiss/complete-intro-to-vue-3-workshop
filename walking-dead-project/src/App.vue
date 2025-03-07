<script setup>
import CharacterForm from '@/components/CharacterForm.vue'
import Characters from '@/components/Characters.vue'
import FavoriteCharacters from '@/components/FavoriteCharacters.vue'
import CharacterStatistics from '@/components/CharacterStatistics.vue'
import BaseLayout from '@/components/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <Characters />
      <FavoriteCharacters
    /></template>
    <template v-slot:sidebar>
      <CharacterStatistics />
      <CharacterForm
    /></template>
  </BaseLayout>
</template>
