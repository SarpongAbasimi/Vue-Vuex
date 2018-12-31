<template>
  <div>
      <div id="nav">
        <router-link to='/' id="home-space" exact > Home</router-link>
        <router-link to='/about' id="about-space" exact > About</router-link>
      </div>

      <div>
         <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name:'Nav',
  data(){
    return{
    }
  },
  methods:{
    myhover:()=>alert('hello')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav{
  width: 100%;
  height: 50px;
  background-color:#1D185F;
  display: flex;
  justify-content: center;
  line-height: 50px;
  margin-bottom: 10px;
}

#home-space{
  margin: 5px;
  text-decoration: none;
}

a{
  color: white;
}

a:hover{
color: red;
}

#about-space{
  margin:5px;
  text-decoration: none;
}
</style>
