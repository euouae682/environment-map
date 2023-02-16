<script setup>
/* Import state "store" */
import { store } from '../store.js';

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <header :class="{ dark: store.viewMode }">
    <h1>{{ name }}</h1>
    <ul>
      <!-- Toggle options sidebar if clicked in the navbar -->
      <li><a @click="store.toggleOptions">Options</a></li>
      <li><a>About</a></li>
      <li><a>Additional Sources</a></li>
    </ul>
  </header>
</template>

<style scoped>
/* Header styles */
header {
    height: 5em;
    line-height: 5em;
}

h1 {
    display: inline;
    padding-left: 0.75em;
}

/* Navbar styles */
ul {
    float: right;
    list-style-type: none;
    height: 100%;
}

/* Navbar item styles */
li {
    float: left;
    text-align: center;
    height: 100%;
}

/* Navbar link styles */
a {
    padding: 25px;
    font-size: 20px;
    color: black;
    transition: color 0.2s;
}

/* Dark mode styles for navbar text */
.dark a {
  color: white;
}

.dark a:hover {
  color: rgb(138, 138, 138);
}

a:hover {
    color: white;
    cursor: pointer;
}
</style>
