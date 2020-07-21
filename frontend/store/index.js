import Vuex from 'vuex';
import ModulesUser from './modules/user';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        users: ModulesUser
    }
});

export default store;   