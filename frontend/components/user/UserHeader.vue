<template>
    <div>
        <div id="container">
            <h2>Lista de Usuários</h2>
            <RouterLinkButton link="/users/register" title="Adicionar novo usuário"/>     
        </div>
    </div>
</template>
<script>
import RouterLinkButton from '../utils/RouterLinkButton'
export default {
    components:{
        RouterLinkButton,
    }
}
</script>
<style scoped>
    div{
        height: 80px;
    }
    div#container{
        margin-top: 20px;
        height: 50px;
    }
    h2 {
       display:inline;
    }
</style>