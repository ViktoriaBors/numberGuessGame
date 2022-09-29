<template>
    <div>
        <div class="backdrop">
            <div class="modal" :class= "{red: isWon== 'false'}">
              <h1 ref="title">modal</h1>
              <p ref="text"></p>
              <p>Refresh to try again</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:["counter"],
  data(){
    return {
        isWon: false,
    }
  },
  mounted(){
      if(this.counter == 10){
        this.isWon = true
        this.$refs.title.innerText = "Game over, no more tries"
    } else {
         this.$refs.title.innerText = "You WON"
         this.$refs.text.innerText = "You guessed right within " + this.counter + " tries"
    }
  }  
  
}
</script>

<style scoped>
  .modal {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 200px auto;
    background: #046457;
    border-radius: 10px;
    text-align: center;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color:white;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
    color:white;
  }
  .modal .red {
    background-color: rgb(90, 1, 1);
  }
</style>