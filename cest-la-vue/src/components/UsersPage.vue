<script>
import { reactive } from "vue";

export default {
  async setup() {
    const state = reactive({
      users: null,
    });

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    state.users = await response.json();

    return {
      users: state.users,
    };
  },
};
</script>

<template>
  <ul v-if="!!users">
    <li v-for="user in users" :key="`user-${user.id}`">{{ user.name }}</li>
  </ul>
  <p>No users</p>
</template>
