<template>
    <input 
        type="text" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        v-bind:placeholder="placeholder"
    >
</template>

<script>
export default {
    props:{
        value:String,
        placeholder:String
    }
}
</script>
<style scoped>
    input {
        padding: 12px 20px;
        margin: 20px 0;
        width: 95%;
        font-size: 1.2em;
    }
</style>