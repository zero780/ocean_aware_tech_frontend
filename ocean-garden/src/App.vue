<template>
  <v-app>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Ganamos ir a la NASA Vue.js App"/>-->
      <GameCard />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GameCard from "@/components/GameCard.vue";


export default {
  name: 'App',
  components: {
    // HelloWorld,
    GameCard
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
}
</style>
