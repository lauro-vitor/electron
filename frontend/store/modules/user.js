

const moduleUser = {

   state: () => ({
       users:[]
   }),
    mutations: {
        ADD_USER (state, payload) {
            console.log('here in mutations of users', payload);
            state.users = [... state.users, payload.user];
            console.log(state.users);
        }
    },
    actions: {
        
    },
    getters:{
        getUsers: state => state.users,
    }
}
export default moduleUser;