<template>  
    <div>   
        <Header 
            title="Lista de Usuários"
            path="/users/register"
            titleButton="Adicionar Usuário"
        />
        <UserTable  v-bind:users="users" />
     
       <!-- <UserTable v-if="!progress" v-bind:users="users" />
        <div v-else-if="contains" id="progressContainter">
            <v-progress-circular
            indeterminate :size="70" 
            :width="7" 
            color="black">
            </v-progress-circular>
        </div>
        <p v-else>Ainda Não possui usuários cadastrados</p> -->
    </div>
</template> 
<script>
import Header from '../../components/utils/Header'
import UserTable from '../../components/user/UserTable'
//import actions from '../../store/actions';

export default {
    components:{
        Header,
        UserTable,
    },
    data: () => ({
        users: [],
        progress: true ,
        contains: true,
    }),

   mounted : async function() {
        this.users = await this.$store.gettersgetUsers;
            /*if(getUsers.length > 0) {
                this.users = getUsers;
                this.progress = false;
            }else {
                this.contains = false;
            }
            console.log(getUsers)*/
       /*try {
            await this.$store.dispatch({
                type:actions.GET_ALL_USERS
            });
            let {getUsers} = this.$store.getters;
            if(getUsers.length > 0) {
                this.users = getUsers;
                this.progress = false;
            }else {
                this.contains = false;
            }

       } catch (error) {
           alert(error);
       }*/

   }
}
</script>
<style scoped>
    #progressContainter{
        text-align: center;
        margin-top: 50px;
    }
</style>
