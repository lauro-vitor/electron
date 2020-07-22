<template>
    <tr >
        <td>{{user.id}}</td>
        <td> {{user.firstName}} {{user.lastName}} </td>
        <td> {{user.email}} </td>
        <td>
            <ButtonOptions title="Alterar"/>
            <ButtonOptions title="Excluir"/>
        </td>
    </tr>
</template>
<script>
import ButtonOptions from './ButtonOptions'
export default {
    components:{
        ButtonOptions,
    },
    props:{
        user:Object,
    }
}
</script>
<style scoped>
    td{
       border: 1px solid #ddd;
       padding: 8px;
    }
    
</style>