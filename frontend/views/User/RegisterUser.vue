<template>
    <FormAddUser/>
</template>
<script>
import FormAddUser from '../../components/user/FormAddUser'
import actions from '../../store/actions'
export default {
    data: () => ({
        actions,
    }),
    components:{
        FormAddUser
    }
}
</script>