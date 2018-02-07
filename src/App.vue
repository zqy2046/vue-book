<template>
  <div>
    <tab></tab>
    <router-view></router-view>
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
