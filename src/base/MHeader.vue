<template>
  <header>
    <slot></slot>
    <i class="iconfont icon-back" v-if="back" @click="goBack"></i>
  </header>
</template>

<script>
  export default {
    name: 'book-header',
    props: {
      back: {
        type: Boolean,
        default: false
      }
    },
    
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/style/varible.less";
  header {
    position:relative;
    width: 100%;
    height: 40px;
    text-align: center;
    font: normal 24px/1.2 'Microsoft YaHei UI';
    color: #666;
    line-height: 40px;
    background-color: #0086b3;
    h1{
      width: 100%;
      height: 100%;
    }
    i {
      position: absolute;
      top:0;
      left: 10px;
      font-size: 20px;
    }
  }
</style>
