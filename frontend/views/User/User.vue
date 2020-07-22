<template>
    <div>
        <UserHeader />
        <UserTable v-if="users.length > 0" v-bind:users="users"/>
        <p v-else>Não possui usuários cadastrados</p>
    </div>
</template>
<script>
import UserHeader from '../../components/user/UserHeader'
import UserTable from '../../components/user/UserTable'

export default {
    components:{
        UserHeader,
        UserTable,
    },
    data: () => ({
        users: [],
    }),

   created : function() {
       let {getUsers} = this.$store.getters;
       if(getUsers.length > 0) {
           this.users = getUsers
       }
   }
}
</script>
