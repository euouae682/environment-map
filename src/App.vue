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
</style>
