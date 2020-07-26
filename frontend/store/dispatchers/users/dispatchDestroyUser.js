
import actions from '../../actions'
import store from '../../index'
export default  async function(id){
    try {
        await store.dispatch({
            type:actions.DESTROY_USER,
            id:id,
        });
        alert('Usuário removido com sucesso!');
    } catch (error) {
        alert(error);
    }
}