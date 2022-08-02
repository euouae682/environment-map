<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello World!" />
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  margin: auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
