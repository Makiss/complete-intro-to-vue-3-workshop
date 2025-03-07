<script setup>
import { ref, computed } from "vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import UsersPage from "./components/UsersPage.vue";

const PAGE_NAMES = {
  HOME: "Home",
  LOGIN: "Login",
  USERS: "Users",
};

const currentPage = ref("Home");

const PAGE_MAPPER = {
  [PAGE_NAMES.HOME]: HomePage,
  [PAGE_NAMES.LOGIN]: LoginPage,
  [PAGE_NAMES.USERS]: UsersPage,
};

const showHomePage = () => (currentPage.value = PAGE_NAMES.HOME);
const showLoginPage = () => (currentPage.value = PAGE_NAMES.LOGIN);
const showUsersPage = () => (currentPage.value = PAGE_NAMES.USERS);

const renderPage = computed(() => PAGE_MAPPER[currentPage.value]);
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
    </span>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUsersPage">Users</a>
    </nav>
  </header>
  <Suspense>
    <component :is="renderPage" />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
