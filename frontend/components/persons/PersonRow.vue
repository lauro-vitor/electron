<template>
    <tr>
        <td>{{person.name}}</td>
        <td>{{person.isBetaMember}}</td>
        <td>{{person.user.email}}</td>
        <td>
           <RouterLinkButton v-bind:link="'/'" title="Alterar" />
           <ButtonDestroy  />
        </td>
    </tr>
</template>
<script>
import ButtonDestroy from '../utils/ButtonDestroy'
import RouterLinkButton from '../utils/RouterLinkButton'
export default {
    components:{
        ButtonDestroy,
        RouterLinkButton,
    },
    props:{
        person:Object
    },
}
</script>
<style scoped>
     td{
       border: 1px solid #ddd;
       padding: 8px;
    }
</style>