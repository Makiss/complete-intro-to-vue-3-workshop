<script setup>
import { reactive } from "vue";

const state = reactive({
  users: null,
});

const response = await fetch("https://jsonplaceholder.typicode.com/users");
state.users = await response.json();
</script>

<template>
  <ul v-if="!!state.users">
    <li v-for="user in state.users" :key="`user-${user.id}`">
      {{ user.name }}
    </li>
  </ul>
  <p>No users</p>
</template>
