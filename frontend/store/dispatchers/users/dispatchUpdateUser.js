import actions from '../../actions'
import store from '../../index'

export default async function(user) {
    try {
        await store.cache.dispatch({
            type: actions.UPDATE_USER,
            user
        });
        alert('Usuário alterado com sucesso!');
    } catch (error) {
        alert(error)
    } 
}