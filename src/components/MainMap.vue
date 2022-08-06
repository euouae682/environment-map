<script setup>
import { store } from '../store.js';
</script>

<template>
  <div class="map" :class="{ dark: store.viewMode }">
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
