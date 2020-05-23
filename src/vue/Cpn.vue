<template>
  <div>
    <h2 class="title">{{message}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:'我是组件的信息lalal'
    }
  }
}
</script>

<style scoped>
  .title{
    color: palegreen;
  }
</style>