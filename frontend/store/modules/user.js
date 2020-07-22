

const moduleUser = {    

   state: () => ({
       userId:0,
       users:[]
   }),
    mutations: {
        ADD_USER(state, payload) {
            state.userId ++;
            let newUser = {
                id: state.userId,
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
                email:  payload.user.email
            }
            state.users = [... state.users, newUser];
        }
       
    },
    actions: {
        
    },
    getters:{
        getUsers: state => state.users,
    }
}
export default moduleUser;