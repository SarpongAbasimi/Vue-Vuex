import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:0,
        addPayLoad:1,
        useObject:2
    },
    getters:{

    },
    action:{

    },
    mutations:{
        increaseCount:(state) => state.count++,
        passPayLoad:(state,payload)=>state.addPayLoad *= payload,
        objMutation:(state,payload)=>state.useObject += 3
    }
})


export default store;