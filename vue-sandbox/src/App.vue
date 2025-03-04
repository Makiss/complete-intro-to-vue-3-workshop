<script>
import Counter from './components/Counter.vue'

export default {
  components: { Counter },
  data() {
    return {
      message: 'Hello, it works',
      listOfNumbers: [1, 2, 3, 4, 5],
    }
  },
}
</script>

<template>
  <counter />
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul>
    <li v-for="number in listOfNumbers">{{ number }}</li>
  </ul>
</template>
