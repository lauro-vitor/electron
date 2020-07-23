<template>
     <FormUpdateUser v-bind:propsId="this.$route.params.id" />
</template>
<script>
import FormUpdateUser from '../../components/user/FormUpdateUser'
import actions from '../../store/actions'

export default {
    data:() =>({
        user: null,
        actions,
    }),
    components:{
        FormUpdateUser,
    },
}
</script>