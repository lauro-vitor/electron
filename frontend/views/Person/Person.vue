<template>
    <div>   
        <Header 
            title="Lista de Membros"
            path="/persons/register"
            titleButton="Adicionar Membro"
        />
        <PersonTable v-if="contains" v-bind:persons="persons"/>
        <Loading v-bind:contains="contains" v-bind="nonContains"/>
    </div>
</template>
<script>
import Header from '../../components/utils/Header'
import PersonTable from '../../components/persons/PersonTable'
import {dispatchGetAllPerson} from '../../store/dispatchers/persons/'
import Loading from '../../components/utils/Loading'
export default {
    data: () => ({
        persons:[],
        contains: false,
        nonContains: false,
    }),
    components: {
        Header,
        PersonTable,
        Loading
    },
    beforeCreate: async function (){
       await dispatchGetAllPerson();
       let {getAllPersons} = this.$store.getters;

       if(getAllPersons.length > 0) {
           this.persons = getAllPersons;
           this.contains = true;
           return;
       }
        this.nonContains = true;
    }
}
</script>
<style scoped>

</style>