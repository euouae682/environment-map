<script setup>
/* Import state "store" */
import { store } from '../store.js';
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <div class="map" :class="{ dark: store.viewMode }">
    <!-- PLACEHOLDER IMAGE -->
    <img src="../assets/map.PNG">
  </div>
</template>

<style scoped>
.map {
    width: 80%;
    height: 100%;
    overflow: auto;
}
</style>
