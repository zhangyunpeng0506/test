<template>
  <div>
    <div class="welcome">{{message}}</div> 
    <div class="sjx"></div>
    <Cpn/>
  </div>
</template>

<script>

import Cpn from './Cpn'

export default {
  data() {
    return {
      message: 'Hello world!'
    }
  },
  components:{
    Cpn,
  }
}
</script>

<style scoped>
  .welcome{
    color: red;
  }
</style>