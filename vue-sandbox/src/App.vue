<script>
export default {
  data() {
    return {
      counterTitle: 'Counter',
      incrementAmount: 1,
      count: 10,
      message: 'Hello, it works',
      listOfNumbers: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Very Long'
      } else {
        return 'Counter Standard'
      }
    },
  },
  methods: {
    incrementCount() {
      this.count += this.incrementAmount
    },
  },
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button @click="incrementCount">Increment Count</button>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input id="incrementAmount" type="number" v-model="incrementAmount" />
  </div>
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul>
    <li v-for="number in listOfNumbers">{{ number }}</li>
  </ul>
</template>
