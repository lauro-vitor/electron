import actions from '../../actions'
import store from '../../index'
export default async function(user) {
    try {
        await store.cache.dispatch({
            type: actions.ADD_USER,
            user
        });
        alert('Usuário cadastrado com sucesso!');
    } catch (error) {
        alert(error)
    } 
}