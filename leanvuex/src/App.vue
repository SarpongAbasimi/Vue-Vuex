<template>
  <div id="app">
    <Nav></Nav>
  </div>
</template>

<script>

import Nav from './components/Nav.vue';
import Home from './components/About.vue';
import About from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  margin: 0;
  background-color: #F6F6F6;
}
</style>
