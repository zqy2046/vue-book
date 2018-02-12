<template>
  <div>
    <tab></tab>
    <transition :name="names" >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="names" >
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from './base/Tab'
  import BookHeader from './base/MHeader'
  
  export default {
    
    name: 'App',
    components: {
      Tab, BookHeader
    },
    data(){
      return {
        index:'',
        names:''
      }
    },
    watch:{
      $route(to,from) {
        if(to.meta.index > from.meta.index) {
          this.names='right'
        } else {
          this.names = 'left'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .right-enter{
    transform:translateX(-100%);
  }
  .right-enter-to{
    transform:translateX(0);
  }
  .right-leave-to {
     transform:translateX(100%);
   }
  .right-enter-active,.right-leave-active {
    transition: all .4s;
  }

  .left-enter{
    transform:translateX(100%);
  }
  .left-enter-to{
    transform:translateX(0);
  }
  .left-leave-to {
    transform:translateX(-100%);
  }
  .left-enter-active,.left-leave-active {
    transition: all .4s;
  }
  /*.slide-leave {*/
    /*transform: translate3d(100%,0,0);*/
  /*}*/
  /*.slide-leave-to {*/
    /*transform: translate3d(0);*/
  /*}*/
  
  
</style>
