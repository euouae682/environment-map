<script setup>
import Header from './components/Header.vue'
import Options from './components/Options.vue'
import MainMap from './components/MainMap.vue'
</script>

<template>
  <Header name="Environment Map" />
  <main>
    <Options />
    <MainMap />
  </main>
</template>

<style scoped>
main {
  height: 840px; /* Hardcoded lol (for now) */
  width: 100%;
  display: flex;
}
</style>
