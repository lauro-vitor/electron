<template>
    <div>
        <Header 
            title="Lista de Membros"
            path="/persons/register"
            titleButton="Adicionar Membro"
        />
        <PersonTable v-if="!progress" v-bind:persons="persons"/>
        <div v-else-if="contains">
            <v-progress-circular
                indeterminate :size="70" 
                :width="7" 
                color="black">
            </v-progress-circular>
        </div>
        <p v-else>Não possui membros cadastrados!</p>
    </div>
</template>
<script>
import Header from '../../components/utils/Header'
import PersonTable from '../../components/persons/PersonTable'
import {dispatchGetAllPerson} from '../../store/dispatchers/persons/'
export default {
    data: () => ({
        persons:[],
        progress: true,
        contains: true,
    }),
    components: {
        Header,
        PersonTable
    },
    beforeCreate: async function (){
       await dispatchGetAllPerson();
       let {getAllPersons} = this.$store.getters;

       if(getAllPersons.length > 0) {
           this.persons = getAllPersons;
           this.progress = false;
           return;
       }
        this.contains = false;
    }
}
</script>
<style scoped>

</style>