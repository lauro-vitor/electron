<template>
  <div class="home">
    <p>Home</p>
  </div>  
</template>

<script>
import actions from '../store/actions'
export default {
  name: 'Home',
  beforeCreate: async function(){
    try {
      await this.$store.dispatch({
        type:actions.GET_ALL_USERS
      });
      await this.$store.dispatch({
        type:actions.GET_ALL_PERSON
      });
      
    } catch (error) {
      alert(error);
    }
  }
}
</script>
