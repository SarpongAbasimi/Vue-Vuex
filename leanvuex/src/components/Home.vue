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
      <hr>
        <span class="badge badge-primary m-1">{{ showObject }}</span>
        <button @click="handlePayObj" class="btn btn-info"> click me </button>
        <hr>
            <div class="container">
                <h1 class="badge badge-danger">This is using Vuex Action</h1>
                    <p>
                     When the button is clicked an action is dispatched to the store.
                     On completion of the action , the action will commit the mutation , which 
                     will then increase the number

                    </p>
                <hr>
                <span class="badge badge-secondary m-1">{{ showAction }}</span>
                <button @click="handleTrueFunc" class="btn btn btn-warning">Send ction </button>
            </div>
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
    },
    showObject:function(){
        return this.$store.state.useObject;
    },
    showAction:function(){
        return this.$store.state.theRightWay;
    }

    },
    methods:{
        handleIncrease:function(){
            return this.$store.commit('increaseCount');
        },
        handlePayload:function(){
           return this.$store.commit('passPayLoad',Math.floor((Math.random()*1)+5)) 
        },
        handlePayObj:function(){
            return this.$store.commit({
                type:'objMutation',
                amount:3
            })
        },
        handleTrueFunc:function(){
            return this.$store.dispatch('theRightFunc',{
                type:'theRightFunc',
                amount:2
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
