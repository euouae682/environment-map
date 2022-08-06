<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <h1>{{ name }}</h1>
    <ul>
        <li><a>About</a></li>
        <l1><a>Additional Sources</a></l1>
    </ul>
  </header>
</template>

<style scoped>
header {
    /* background-color: rgb(12, 139, 0); */
    /* color: rgb(240, 240, 240); */
    height: 5em;
    line-height: 5em;
    border: 3px solid black;
    background-color: rgb(16, 194, 0)
}

h1 {
    display: inline;
    padding-left: 0.75em;
}

ul {
    float: right;
    list-style-type: none;
    height: 100%;
    /* border: 1px solid red; */
}

li {
    float: left;
    text-align: center;
    height: 100%;
}

a {
    padding: 25px;
    font-size: 20px;
    color: black;
    transition: color 0.2s;
}

a:hover {
    color: white;
    cursor: pointer;
}
</style>
