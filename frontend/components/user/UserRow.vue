<template>
    <tr >
        <td>{{user.id}}</td>
        <td> {{user.firstName}} {{user.lastName}} </td>
        <td> {{user.email}} </td>
        <td> 
            <RouterLinkButton v-bind:link="route" title="Alterar"/>
            <ButtonDestroy v-on:click="remove(user.id)"/>
        </td>
    </tr>
</template>
<script>
import ButtonDestroy from '../utils/ButtonDestroy'
import RouterLinkButton from '../utils/RouterLinkButton'
import {dispatchDestroyUser} from '../../store/dispatchers/users/'

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
      remove: async function (id) {
        await dispatchDestroyUser(id);
      }
    },  
    created: function() {
        this.setRoute(this._props.user.id);
    },
    
}
</script>
<style scoped>
    td{
       border: 1px solid #ddd;
       padding: 8px;
    }
    
</style>