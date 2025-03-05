<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  emits: ['add-to-favorite'],
  methods: {
    onAddToFavorite() {
      this.$emit('add-to-favorite', this.character)
    },
  },
}
</script>

<template>
  <p>{{ character.name }}</p>
  <button @click="onAddToFavorite">Favorite</button>
</template>
