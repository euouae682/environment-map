<script setup>
/* Import state "store" */
import { store } from '../store.js';
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <div class="map" :class="{ dark: store.viewMode }">
    <!-- PLACEHOLDER IMAGE -->
    <!-- <img v-if="store.viewMode" src="../assets/darkmap.PNG">
    <img v-else src="../assets/lightmap.PNG"> -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59282557.89881275!2d-22.324166368248864!3d24.921160135292435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1660091421742!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>
.map {
    width: 100%;
    height: 100%;
    overflow: auto;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
