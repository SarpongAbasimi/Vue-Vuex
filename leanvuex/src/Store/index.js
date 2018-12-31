import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:0,
        addPayLoad:10
    },
    getters:{

    },
    action:{

    },
    mutations:{
        increaseCount:(state) => state.count++,
        passPayLoad:(state,payload)=>state.addPayLoad *= payload,
    }
})


export default store;