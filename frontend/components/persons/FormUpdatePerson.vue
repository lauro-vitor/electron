<template>
  <form action v-on:submit.prevent="submitForm()">
    <TextInput 
      v-model="name" 
      placeholder="Apelido"   
      v-bind:onkeydown="validateNameOnKeyDownLoacal()"
      
    />
    <MessageError v-bind:message="messageName" />
    <TitleInput title="Membro:" />
    <div class="containerRadioButton">
      <label class="container">
        Sim
        <input type="radio" v-model="isBetaMember" v-bind:value="true" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Não
        <input type="radio" v-model="isBetaMember" v-bind:value="false" />
        <span class="checkmark"></span>
      </label>
    </div>

    <TitleInput title="Email:" />
    <select v-model="userId"  size="2">
      <option
        v-for="user in this.$store.getters.getUsers"
        v-bind:key="user.id"
        v-bind:value="user.id"
      >{{user.email}}</option>
    </select>

    <SubmitButton title="salvar" />
  </form>
</template>
<script>
import TextInput from "../form/TextInput";
import SubmitButton from "../form/SubmitButton";
import MessageError from "../form/MessageError";
import TitleInput from '../form/TitleInput'
import validateNameOnKeyDown from '../../validators/persons/validateNameOnKeyDown'
import validateFormPerson from '../../validators/persons/validateFormPerson'
import actions from '../../store/actions'

export default {
  components: {
    TextInput,
    SubmitButton,
    MessageError,
    TitleInput
  },
  props:{
      propId:String,
  },
  data: () => ({
    id: 0,
    name: "",
    messageName: "",
    isBetaMember: true,
    userId:0,
    personToUpdate: null,
    
  }),
  methods: {
    validateNameOnKeyDownLoacal: function (){
      validateNameOnKeyDown(this);
    },
    submitForm: async function () {
      if(validateFormPerson(this)) {
        let person = {
          id: this.id,
          name: this.name,
          isBetaMember: this.isBetaMember,
          userId: this.userId,
        }
        await this.dispatchUpdatePerson(person);
        this.$router.push('/persons');
      }
    },
    
    dispatchUpdatePerson: async function (person){
      try {
        await this.$store.dispatch({
          type: actions.UPDATE_PERSON,
          person
        });
        alert('Membro alterado com sucesso!');
      } catch (error) {
        alert('error', error);
      }
    },
    mountFormPerson: function (){
        this.name = this.personToUpdate.name;
        this.isBetaMember = this.personToUpdate.isBetaMember;
        this.userId = this.personToUpdate.userId;
    }
  },
  created: function (){
      this.id = parseInt(this._props.propId, 10);
      this.personToUpdate = this.$store.getters.getPersonById(this.id);
      this.mountFormPerson();
    }

};
</script>
<style scoped>
form {
  width: 60%;
  margin: 30px auto 10px auto;
}
select {
  width: 100%;
  font-size: 1.2em;
  border: 1px solid #c2c2c2;
  padding: 12px 20px;
  margin-bottom: 60px;
}
.containerRadioButton {
  margin-bottom: 20px;
}
/* Customize the label (the container) */
.container {
  display: inline;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>