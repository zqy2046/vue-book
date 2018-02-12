<template>
  <div class="nav-wrap">
    <ul class="main-nav ">
      <router-link exact to="/home" tag="li">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list" tag="li">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/add" tag="li">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </router-link>
      <router-link to="/collect" tag="li">
        <i class="iconfont icon-collect"></i>
        <span>收藏</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'tab'
  }
</script>

<style scoped lang="less">
  @import "../assets/style/varible";
  .nav-wrap {
    z-index: 5;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .main-nav {
      display: flex;
      width: 100%;
      height: 40px;
      align-item: center;
      li {
        display: flex;
        position: relative;
        flex-direction: column;
        flex: 1;
        text-align: center;
        background-color: #ccc;
        color: #666;
        padding: 5px 0;
        &:before{
          content:'';
          position: absolute;
          top:0;
          left: 50%;
          transform:translateX(-50%);
          height: 0;
          width: 40%;
        }
        &:last-of-type {
          border-right: none;
        }
        &.active{
          color: @color-theme;
          &:before {
            border: 1px solid @color-theme;
          }
        }
        i {
          flex: 1;
        }
        span {
          flex: 1;
        }
      }
    }
  }
</style>
