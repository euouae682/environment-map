<script setup>
/* Import state "store" */
import { store } from '../store.js';
import WorldMap from '../assets/WorldMap.vue';
import Modal from './Modal.vue';
</script>

<template>
  <!-- Add `dark` class if dark mode is toggled on -->
  <div class="map" :class="{ dark: store.viewMode }">
    <!-- World map component -->
    <WorldMap />
    <!-- Modal/pop-up component (WIP)-->
    <Modal />
    <a href="https://commons.wikimedia.org/wiki/File:BlankMap-World.svg">Canuckguy (talk) and many others (see File history)</a>, Public domain, via Wikimedia Commons
  </div>
</template>

<style scoped>
/* Map formatting styles */
.map {
    width: 100%;
    /* height: 100%; */
    overflow: scroll;
}

/* img, iframe {
  width: 100%;
  height: 100%;
} */
</style>
