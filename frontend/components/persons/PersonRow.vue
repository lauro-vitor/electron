<template>
    <tr>
        <td>{{person.id}}</td>
        <td>{{person.name}}</td>
        <td>{{person.isBetaMember}}</td>
        <td>{{person.user.email}}</td>
        <td>
           <RouterLinkButton v-bind:link="route" title="Alterar" />
           <ButtonDestroy  v-on:click="destroyPerson(person.id)"/>
        </td>
    </tr>
</template>
<script>
import ButtonDestroy from '../utils/ButtonDestroy'
import RouterLinkButton from '../utils/RouterLinkButton'
import store from '../../store/index';
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
        person:Object
    },
    methods:{
        setRoute: function (id){
            this.route = `/persons/update/${id}`;
        },
        destroyPerson: async function (id){
           await this.dispatchDestroyPerson(id);
           alert('Usuário excluido com sucesso!');
        },
        dispatchDestroyPerson: async function (id) {
          try {
            await store.dispatch({
              type:actions.DESTROY_PERSON,
              id,
            });
          } catch (error) {
            alert(error);
          }
        }
    },
    created: function(){
        this.setRoute(this._props.person.id);
    }
}
</script>
<style scoped>
     td{
       border: 1px solid #ddd;
       padding: 8px;
    }
</style>