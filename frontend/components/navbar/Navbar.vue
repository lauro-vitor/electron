<template>
    <div>
        <NavItem name="Home" link="/"/>
        <NavItem name="Usuários" link="/users" />
        <NavItem name="Pessoas" link="/persons" />
    </div>
</template>
<script>
import NavItem from './NavItem'
export default {
    components:{
        NavItem,
    }
}
</script>
<style scoped>
    div {
        background-color: #333;
        margin: 0px;
        padding: 20px 10px 20px 10px;
        color:white;
    }
</style>