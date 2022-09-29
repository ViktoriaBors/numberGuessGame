<template>
  <div class="container">
    <div v-if="!isPlaying">
      <Start></Start>
      <button @click="startGame">Start Here</button>
    </div>
      <Guesses v-if="isPlaying" @end="endGame"></Guesses>
      <teleport to="#modal" v-if="isOver">
      <Scene v-if="isOver" :counter="counter"></Scene>
      </teleport>
  </div>
</template>

<script>
import Start from "./components/Start.vue";
import Guesses from "./components/Guesses.vue";
import Scene from "./components/Scene.vue";

export default {
  name: "App",
  components: {
    Start,
    Guesses,
    Scene,
  },
  data() {
    return {
      isPlaying: false,
      isOver: false,
      counter: null,

    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
    },
    endGame(counter){
      this.counter = counter
      this.isOver = true
      console.log(counter)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container {
  max-width: 550px;
  min-width: 300px;
  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(252, 253, 234);
  color: rgb(59, 71, 60);
}
.container button {
  margin: 0.3rem;
  padding: 0.3rem;
  width: 150px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: rgb(75, 93, 103);
  color: white;
}
.container button:hover {
  background-color: rgb(117, 145, 160);
  cursor: pointer;
}

</style>
