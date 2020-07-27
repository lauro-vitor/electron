import actions from '../../actions'
import store from '../../index'

export default async function() {
    try {
        await store.cache.dispatch({
            type:actions.GET_ALL_USERS
        });

   } catch (error) {
       alert(error);
   }
}