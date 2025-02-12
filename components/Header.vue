<template>
  <div class="menu-icon" @click="toggleMenu"></div>

  <header class="header">
    <div class="logo">
      <NuxtLink to="/">MyBrand</NuxtLink>
    </div>

    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/register" @click="">Register</NuxtLink>
      <NuxtLink to="/login" @click="">Login</NuxtLink>
      <NuxtLink to="/form" @click="">form</NuxtLink>
    </nav>

    <div v-if="showMenu" class="mobile-menu">
      <NuxtLink to="/" @click="toggleMenu">Home</NuxtLink>
      <NuxtLink to="/about" @click="toggleMenu">About</NuxtLink>
      <NuxtLink to="/services" @click="toggleMenu">Services</NuxtLink>
      <NuxtLink to="/contact" @click="toggleMenu">Contact</NuxtLink>
    </div>

    <button @click="auth.logout()">Logout</button>

  </header>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

</script>

<style scoped>
/* Header Styling */
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 20px;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Logo */
.logo a {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* Navigation Links */
.nav {
  display: flex;
  gap: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 1em;
  transition: 0.3s;
}

.nav a:hover {
  color: #f39c12;
}

/* Mobile Menu */
.menu-icon {
  display: none;
  font-size: 1.8em;
  cursor: pointer;
}

/* Mobile Navigation */
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background: #444;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
}

.mobile-menu a:hover {
  background: #f39c12;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
  .menu-icon {
    display: block;
  }
}
</style>
