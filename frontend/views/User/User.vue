<template>
  <div>
    <Header title="Lista de Usuários" path="/users/register" titleButton="Adicionar Usuário" />
    <UserTable v-if="!progress" v-bind:users="users" />
    <div v-else-if="contains" id="progressContainter">
      <v-progress-circular indeterminate :size="70" :width="7" color="black"></v-progress-circular>
    </div>
    <p v-else>Ainda Não possui usuários cadastrados</p>
  </div>
</template> 
<script>
import Header from "../../components/utils/Header";
import UserTable from "../../components/user/UserTable";
import { dispatchGetAllUser } from "../../store/dispatchers/users";

export default {
  components: {
    Header,
    UserTable,
  },
  data: () => ({
    users: [],
    progress: true,
    contains: true,
  }),

  beforeCreate: async function () {
    await dispatchGetAllUser();
    let { getUsers } = this.$store.getters;
    if (getUsers.length > 0) {
      this.users = getUsers;
      this.progress = false;
    } else {
      this.contains = false;
    }
  },
};
</script>
<style scoped>
#progressContainter {
  text-align: center;
  margin-top: 50px;
}
</style>
