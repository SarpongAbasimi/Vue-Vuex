<template>
  <div id="home">
      <div class="container">
          <p>This is  on the home page
          and i think it is finally working now</p>
      </div>
      <div class="container">
        <span class="badge badge-dark m-1">{{ count }}</span>
      <button @click="handleIncrease" class="btn btn-primary">click me</button>
      <hr>
      <span class="badge badge-success m-1"> {{showAddPyload }}</span>
      <button @click='handlePayload' class="btn btn-danger">click me </button>
      </div>
  </div>
</template>

<script>
  /* import store into Home component*/

export default {
    name:'Home',
    data(){
        return{
            home:'yeah home',
        }
    },
    computed:{
    count:function(){
        return this.$store.state.count;
        },
    showAddPyload:function(){
        return this.$store.state.addPayLoad;
    }
    },
    methods:{
        handleIncrease:function(){
            return this.$store.commit('increaseCount');
        },
        handlePayload:function(){
           return this.$store.commit('passPayLoad',(Math.random()*1.2)+1) 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
