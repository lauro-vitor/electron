import axios from 'axios';
import mutations from '../mutations'

const modulePerson = {

    state: () => ({
        persons: [],
    }),

    mutations: {
        GET_ALL_PERSON(state, payload) {
           state.persons = [... payload.persons];
        },

        ADD_PERSON(state, payload) {
            state.persons = [... state.persons, payload.person];
        },
        UPDATE_PERSON(state, payload) {
            let personUpdated = payload.person;
            let index = state.persons.indexOf(
                state.persons.find(person => person.id == personUpdated.id)
            );
            state.persons[index] = {...personUpdated};
        },
        DESTROY_PERSON(state, payload) {
            let index = state.persons.indexOf(
                state.persons.find(person => person.id == payload.id)
            );
            if (index >= 0) {
                state.persons.splice(index, 1);
            }
        }
    },

    actions: {
        GET_ALL_PERSON({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:3000/api/persons/')
                .then(response => {
                    let personData = response.data;
                    if(!personData.error) {
                        commit({
                            type: mutations.GET_ALL_PERSON,
                            persons: personData.data.persons,
                        });
                        resolve();
                        return;
                    }
                    reject(personData.messages[0]);
                })
                .catch(error => {
                    reject(error);
                })
            });
        },

        ADD_PERSON({commit}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(
                  'http://localhost:3000/api/persons',
                  payload.person
                )
                .then(response => {
                    let personData = response.data;
                    if(!personData.error) {
                        commit({
                            type: mutations.ADD_PERSON,
                            person: personData.data.person,
                        });
                        resolve();
                    } else {
                        reject(personData.messages[0]);
                    }
                 
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        UPDATE_PERSON({commit}, payload) {
            return new Promise((resolve, reject) => {
              axios.put(
                `http://localhost:3000/api/persons/${payload.person.id}`, 
                payload.person)
                .then(response => {
                    let {data} = response.data;
                    if(!data.error){
                        commit({
                            type:mutations.UPDATE_PERSON,
                            person:data.person
                        });
                        resolve();
                        return;
                    }
                    reject(data.messages);
                })
                .catch(error => {
                    reject(error);
                });
            });
        },
        DESTROY_PERSON({commit}, payload) {
            return new Promise((resolve, reject) => {
                axios.delete(`http://localhost:3000/api/persons/${payload.id}`)
                .then(response => {
                  let {data} = response;
                  if(!data.error){
                    commit({
                        type:mutations.DESTROY_PERSON,
                        id:payload.id,
                    });
                    resolve();
                    return;
                  }
                  reject(data.messages);
                })
                .catch(error => {
                  reject(error);
                })
            })
        }
    },

    getters: {
        getAllPersons: state => state.persons,
        getPersonById: state => id => state.persons.find(person => person.id == id)
    }
}
export default modulePerson;