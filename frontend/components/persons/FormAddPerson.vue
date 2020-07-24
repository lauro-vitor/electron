<template>
  <form action v-on:submit.prevent="submitForm()">
    <TextInput v-model="name" placeholder="Apelido" />
    <MessageError v-bind:message="messageName" />
    <label for>Membro:</label>
    <br />
    <input type="radio" v-model="isBetaMember" v-bind:value="true" />
    <label>Sim</label>
    <span></span>
    <input type="radio" v-model="isBetaMember" v-bind:value="false" />
    <label>Não</label>
   
    <select v-if="users.length > 0">
      <option 
        v-for="user in users" 
        v-bind:key="user.id" 
        v-bind:value="user.id">
        {{user.email}}
      </option>
    </select>
     <p v-else> Não existem usuários cadastrados!</p>
    <SubmitButton title="salvar" />
  </form>
</template>
<script>
import TextInput from "../form/TextInput";
import SubmitButton from "../form/SubmitButton";
import MessageError from "../form/MessageError";
export default {
  data: () => ({
    name: "",
    messageName: "",
    isBetaMember: true,
    users: [],
  }),
  methods: {
    submitForm: function () {
      console.log("value of forms");
      console.log(this.name);
      console.log(this.isBetaMember);
    },
  },
  components: {
    TextInput,
    SubmitButton,
    MessageError,
  },
  beforeCreate: function () {
    this.users = this.$store.getters.getUsers;
    console.log(this.)
    console.log(this.users);
  },
};
</script>
<style scoped>
form {
  width: 60%;
  margin: 10px auto 10px auto;
}
</style>