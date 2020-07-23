<template>
    <tr >
        <td>{{user.id}}</td>
        <td> {{user.firstName}} {{user.lastName}} </td>
        <td> {{user.email}} </td>
        <td> 
            <RouterLinkButton v-bind:link="route" title="Alterar"/>
            <ButtonDestroy title="Excluir" v-on:click="dispatchDestroyUser()"/>
        </td>
    </tr>
</template>
<script>
import ButtonDestroy from './ButtonDestroy'
import RouterLinkButton from '../utils/RouterLinkButton'
import store from '../../store/index'
import actions from '../../store/actions';

export default {
    data: () => ({
        route: '',
    }),
    components:{
        ButtonDestroy,
        RouterLinkButton,
    },
    props:{
        user:Object,
    },
    methods:{
      setRoute: function(id){
          this.route = `/users/update/${id}`
      },
      dispatchDestroyUser: async function (){
          try {
              await store.dispatch({
                  type:actions.DESTROY_USER,
                  id:this._props.user.id
              });
              alert('Usuário removido com sucesso!');
          } catch (error) {
              alert(error);
          }
      }
    },
    created: function() {
        this.setRoute(this._props.user.id);
    }
}
</script>
<style scoped>
    td{
       border: 1px solid #ddd;
       padding: 8px;
    }
    
</style>