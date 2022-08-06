<script setup>
/* Import components needed */
import Header from './components/Header.vue'
import Options from './components/Options.vue'
import MainMap from './components/MainMap.vue'
import MoreInfo from './components/MoreInfo.vue'
/* Import state "store" */
import { store } from './store.js';
</script>

<template>
  <Header name="Environment Map" />
  <main>
    <Options v-if="store.showOptions" />
    <MainMap />
    <!-- Only render `MoreInfo` if `showMore` is true -->
    <MoreInfo v-if="store.showMore" />
  </main>
</template>

<style scoped>
main {
  /* Set main panel of webpage to remaining size of the screen */
  height: 840px; /* Hardcoded lol (for now) */
  width: 100%;
  /* Allow subpanels (i.e. options, map, moreInfo) to align horizontally */
  display: flex;
}

/* Styles for light mode */
header {
  background-color: rgb(16, 194, 0)
}

header, .map, aside {
  border: 3px solid black;
  /* Creates transition between light/dark mode toggling */
  transition-duration: 1.5s;
}

/* Styles for dark mode */
header.dark {
  background-color: rgb(7, 80, 0);
}

.dark {
  background-color: rgb(31, 31, 31);
  color: rgb(230, 230, 230);
}
</style>
