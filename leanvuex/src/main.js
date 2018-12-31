import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


/* Import Vuex Store */
import store from './Store/index.js'

/* Import componenets here */
import Home from './components/Home'
import About from './components/About'

Vue.config.productionTip = false

/* use vue-router*/ 
Vue.use(VueRouter)


const routes=[
  {path:'/' ,component:Home},
  {path:'/about',component:About}
]

const router =new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
