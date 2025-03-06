<script>
export default {
  data: () => ({
    users: null,
  }),
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = await response.json();
    },
  },
};
</script>

<template>
  <ul v-if="!!users">
    <li v-for="user in users" :key="`user-${user.id}`">{{ user.name }}</li>
  </ul>
  <p>No users</p>
</template>
