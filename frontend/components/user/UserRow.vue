<template>
    <tr >
        <td>{{user.id}}</td>
        <td> {{user.firstName}} {{user.lastName}} </td>
        <td> {{user.email}} </td>
        <td>
            <ButtonOptions title="Alterar" />
            <ButtonOptions title="Excluir" v-on:click="destroyUser(user.id)"/>
        </td>
    </tr>
</template>
<script>
import ButtonOptions from './ButtonOptions'
import store from '../../store/index'
import actions from '../../store/actions';

export default {
    components:{
        ButtonOptions,
    },
    props:{
        user:Object,
    },
    methods:{
        destroyUser:  id => {
           
            console.log(
                 store.dispatch({
                    type: actions.DESTROY_USER,
                    id,
                }).then(() => {
                    alert('Usuário foi removido com sucesso!');
                })
                .catch(() => {
                    alert('não foi possível remover usuário!');
                })
            );
           
           
        }
    }
}
</script>
<style scoped>
    td{
       border: 1px solid #ddd;
       padding: 8px;
    }
    
</style>