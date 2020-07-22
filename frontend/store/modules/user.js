import mutations from '../mutations'
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
        },
        DESTROY_USER(state, payload){
            return new Promise((resolve, reject) => {
                let index = state.users.indexOf(
                    state.users.find(user => user.id == payload.id)
                );
                if(index >= 0) {
                    state.users.splice(index, 1);
                    resolve();
                }else {
                    reject();
                }
            });
        }
       
    },  
    actions: {
        DESTROY_USER({commit}, payload){
           
            let {id} = payload;
            return new Promise((resolve) => {
                console.log('in actions awaiting promises');
                console.log(
                    commit({
                        type:mutations.DESTROY_USER,
                        id
                    })
                );
                resolve();
            });
                
        }
    },
    getters:{
        getUsers: state => state.users,
    }
}
export default moduleUser;