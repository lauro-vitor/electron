import Vuex from 'vuex';
import ModulesUser from './modules/user';
import ModulePerson from './modules/person';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        users: ModulesUser,
        persons: ModulePerson,
    }
});

export default store;   