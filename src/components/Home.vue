<template>
  <div>
    <m-header :back="true"><h1>首页</h1></m-header>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import Slider from '../base/Slider'
  
  export default {
    name: 'home',
    components: {
      MHeader, Slider
    }
  }
</script>

<style scoped>

</style>
