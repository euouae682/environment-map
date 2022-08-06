<script setup>
/* Import state "store" */
import { store } from '../store.js';
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <div class="map" :class="{ dark: store.viewMode }">
    <!-- PLACEHOLDER IMAGE -->
    <img v-if="store.viewMode" src="../assets/darkmap.PNG">
    <img v-else src="../assets/lightmap.PNG">
  </div>
</template>

<style scoped>
.map {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
