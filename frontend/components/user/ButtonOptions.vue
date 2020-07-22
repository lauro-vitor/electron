<template>
    <button v-on:click="$emit('click',$event.target.value)">{{title}}</button>
</template>
<script>
export default {
    props:{
        title:String,
        path:String,
    }
}
</script>
<style scoped>
    button{
        padding:10px;
        margin: 5px;
    }
    button:hover {
        cursor: pointer;
    }
</style>