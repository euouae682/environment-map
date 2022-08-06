<script setup>
import Header from './components/Header.vue'
import Options from './components/Options.vue'
import MainMap from './components/MainMap.vue'
import MoreInfo from './components/MoreInfo.vue'
</script>

<template>
  <Header name="Environment Map" />
  <main>
    <Options />
    <MainMap />
    <MoreInfo v-if="showMore" />
  </main>
</template>

<style scoped>
main {
  height: 840px; /* Hardcoded lol (for now) */
  width: 100%;
  display: flex;
}

/* Styles for light mode */
header {
  background-color: rgb(16, 194, 0)
}

header, .map, aside {
  border: 3px solid black;
}

/* Styles for dark mode */
header.dark {
  background-color: rgb(7, 80, 0);
}

.dark {
  border: none;
  background-color: rgb(31, 31, 31);
  color: rgb(230, 230, 230);
}

.dark a {
  color: rgb(230, 230, 230);
}

</style>
