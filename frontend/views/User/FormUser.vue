<template>
    <form action="" v-on:submit.prevent="submitForm()">
        <TextInput v-model="firstName" placeholder="Primeiro Nome" />
        <TextInput v-model="lastName" placeholder="Sobrenome" />
        <TextInput v-model="email" placeholder="email@exemplo.com" />
        <SubmitButton title="Salvar"/>
    </form>
</template>

<script>
import TextInput from '../../components/form/TextInput'
import SubmitButton from '../../components/form/SubmitButton'

export default {
    data: () => ({
        firstName:'',
        lastName: '',
        email: '',  
    }),
    components:{
        TextInput,
        SubmitButton
    },
    methods:{
        submitForm:function(){
            let firstName = this.firstName;
            let lastName = this.lastName;
            let email = this.email;
            let user = {
                firstName,
                lastName,
                email
            } 
            this.$store.commit({
                type: 'ADD_USER',
                user,
            });

            this.clearForm();
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