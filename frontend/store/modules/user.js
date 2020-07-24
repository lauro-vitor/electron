import mutations from '../mutations'
import axios from 'axios'
    
const moduleUser = {

    state: () => ({
        users: []
    }),
    mutations: {
        GET_ALL_USERS(state, payload) {
            state.users = [...payload.data.users]
        },
        ADD_USER(state, payload) {
            let { user } = payload.data;
            let newUser = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
            state.users = [...state.users, newUser];
        },

        UPDATE_USER(state, payload) {
            let userUpdated = payload.data.user;
            let index = state.users.indexOf(
                state.users.find(user => user.id == userUpdated.id)
            );
            state.users[index] = {...userUpdated};
        },

        DESTROY_USER(state, payload) {
            let index = state.users.indexOf(
                state.users.find(user => user.id == payload.id)
            );
            if (index >= 0) {
                state.users.splice(index, 1);
            }
        }

    },
    actions: {
        GET_ALL_USERS({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:3000/api/users')
                    .then(response => {
                        if (!response.error) {
                            let responseData = response.data;
                            let { data } = responseData;
                            commit({
                                type: mutations.GET_ALL_USERS,
                                data,
                            });
                            resolve();
                            return;
                        }
                        reject(response.messages[0]);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        ADD_USER({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3000/api/users/', payload.user)
                    .then(response => {
                        let responseData = response.data;
                        if (!responseData.error) {
                            let data = responseData.data;
                            commit({
                                type: mutations.ADD_USER,
                                data,
                            });
                            resolve();
                            return;
                        }
                        reject(responseData.messages[0]);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })  
        },
        UPDATE_USER({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:3000/api/users/${payload.user.id}`, payload.user)
                    .then(response => {
                        let responseData = response.data;
                        if (!responseData.error) {
                            let data = responseData.data;
                            commit({
                                type: mutations.UPDATE_USER,
                                data
                            });
                            resolve();
                            return;
                        }
                        reject(responseData.messages[0]);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        DESTROY_USER({commit}, payload) {
            return new Promise((resolve, reject) => {
                axios.delete(`http://localhost:3000/api/users/${payload.id}`)
                .then(response => {
                    let responseData = response.data;
                    if(!responseData.error){
                        commit({type:mutations.DESTROY_USER, id:payload.id})
                        resolve();
                        return;
                    }
                    reject(responseData.messages[0]);
                })
                .catch(error => {
                    reject(error);
                });
            });
        }
    },
    getters: {
        getUsers: state => state.users,
        getUserById: state => id => {
            return state.users.find(user => user.id === id);
        },
    }
}
export default moduleUser;