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

        ADD_PERSON() {

        },
        UPDATE_PERSON() {

        },
        DESTROY_PERSON() {

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

        ADD_PERSON() {
            
        },
        UPDATE_PERSON() {

        },
        DESTROY_PERSON() {

        }
    },

    getters: {
        getAllPersons: state => state.persons,

    }
}
export default modulePerson;