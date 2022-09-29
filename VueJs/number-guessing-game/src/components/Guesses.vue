<template>
  <div>
    <label for="guessed"> Enter your Guess:</label>
    <input type="text" id="guessed" required ref="oneGuess" />

    <button id="submit" ref="submitBtn" @click="gameOn">SUBMIT</button>

    <p v-if="isString">Your guess is not a number</p>
    <p v-if="isNotRange">Your guess is not in range (1 - 100)</p>

    <div v-if="isWrong">
      <p id="wrong">WRONG</p>
      <p ref="help"></p>
    </div>

    <div v-if="guessed.length !== 0">
      <p>Previously guessed numbers</p>
      <span v-for="guess in guessed" :key="guess"> {{ guess }}</span>
    </div>

    <p ref="scene"></p>

 

    
  </div>
</template>

<script>

export default {
  data() {
    return {
      guessed: [],
      theNumber: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      isString: false,
      isNotRange: false,
      isOutofGuess: false,
      isWon: false,
      isWrong: false,
      counter : 0
    };
  },

  methods: {
    gameOn() {
      console.log(this.theNumber);
      let guess = this.$refs.oneGuess.value;
      this.isString = false;
      this.isNotRange = false;
      this.isWrong = true
      if (isNaN(guess)) {
        this.isString = true;
        this.isNotRange = false;
        return;
      } else if (guess < 1 || guess > 100) {
        this.isString = false;
        this.isNotRange = true;
        return;
      }
      this.counter += 1
      this.guessed.push(guess);
      if(this.counter == 10 ){
        this.isOutofGuess= true
        this.$emit("end", this.counter)
        this.$refs.oneGuess.disabled = true
        this.$refs.submitBtn.disabled = true
      } else if (guess == this.theNumber){
        this.$emit("end", this.counter)
        this.isWon= true
        this.isWrong = false
      } else {
        if( guess > this.theNumber){
            this.$refs.scene.innerText = "The number is smaller than what you guessed"
        } else if (guess < this.theNumber){
            this.$refs.scene.innerText = "The number is greater than what you guessed"
        }
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
#guessed {
  margin: 0.5rem;
}
#wrong {
  background-color: #b20600;
  color: white;
  padding: 1rem;
  border-radius: 5px;
}
</style>