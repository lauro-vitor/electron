<template>
    <form action="" v-on:submit.prevent="submitForm()">
        <TextInput 
            v-model="firstName" 
            placeholder="Primeiro Nome" 
            v-bind:onkeydown="validateFirstNameOnKeyDownLocal()"/>
            
        <MessageError v-bind:message="messageFirstName" />

        <TextInput 
            v-model="lastName"
            placeholder="Sobrenome"
            v-bind:onkeydown="validationLastNameOnKeyDownLocal()"/>

         <MessageError v-bind:message="messageLastName" />

        <TextInput 
            v-model="email" 
            placeholder="email@exemplo.com"
              v-bind:onkeydown="validationEmailOnKeyDownLocal()"
            />

         <MessageError v-bind:message="messageEmail" />
        <SubmitButton title="Salvar"/>
    </form>
</template>

<script>
import TextInput from '../../components/form/TextInput'
import SubmitButton from '../../components/form/SubmitButton'
import MessageError from '../../components/form/MessageError'
import validateFirstNameOnKeyDown from '../../validators/user/validateFirstNameOnKeyDown'
import validateLastNameOnKeyDown from '../../validators/user/validateLastNameOnKeyDown'
import validateEmailOnKeyDown from '../../validators/user/validateEmailOnKeyDown'
import validateFormUser from '../../validators/user/validateFormUser'
import mutations from '../../store/mutations'

export default {
    data: () => ({
        firstName:'',
        lastName: '',
        email: '',
        messageFirstName:'',
        messageLastName: '',
        messageEmail: '',
    }),
    components:{
        TextInput,
        SubmitButton,
        MessageError
    },
    methods:{
        validateFirstNameOnKeyDownLocal: function (){
            validateFirstNameOnKeyDown(this);
        },
        validationLastNameOnKeyDownLocal: function (){
            validateLastNameOnKeyDown(this);
        },
        validationEmailOnKeyDownLocal: function () {
          validateEmailOnKeyDown(this);
        },
        validateForm: function (){
           return validateFormUser(this);
        },
        submitForm:function(){
            if(this.validateForm()) {
                    let firstName = this.firstName;
                    let lastName = this.lastName;
                    let email = this.email;
                    let user = {
                        firstName,
                        lastName,
                        email
                    }
                this.$store.commit({
                    type: mutations.ADD_USER,
                    user,
                });
                alert('Usuário cadastrado com sucesso!');
                this.clearForm();
            }
            
        },
        clearForm: function() {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
        }
    }
}
</script>
<style scoped>
    form{
        width: 60%;
        margin: 10px auto 10px auto;
    }
</style>