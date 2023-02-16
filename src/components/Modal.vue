<script setup>
import { store } from '../store.js';
</script>

<template>
    <div v-if="store.showModal" class="modal">
        <h1>Header</h1>
        <p>Description</p>
    </div>
</template>

<style scoped>
/* Formatting styles */
.modal {
    position: absolute;
    z-index: 1;
    width: 300px;
    height: 400px;
    top: 0;
    left: 0;
    background-color: white;
    border: 3px solid black;
}
</style>
