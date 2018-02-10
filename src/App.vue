<template>
  <div>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Tab from './base/Tab'
  import BookHeader from './base/MHeader'
  
  export default {
    name: 'App',
    components: {
      Tab, BookHeader
    }
  }
</script>
<style lang="less">
</style>
