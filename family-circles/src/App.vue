<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Point/> -->
    <Field/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Point from '@/components/Point.vue'
import Field from '@/views/Field.vue'
export default {
  name: 'App',
  components: {
//    HelloWorld,
    // Point,
    Field,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
