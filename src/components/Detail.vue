<template>
  <div class="detail">
    <m-header :back="true">详情页面</m-header>
    <h1>{{path}}</h1>
    <div class="book">
      {{book}}
      <img :src="book.bookImage" alt="">
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {findOneBook} from '../api'
  
  export default {
    name: 'detail',
    data() {
      return {
        book: {}
      }
    },
    components: {
      MHeader
    },
    created() {
      // 页面加载,根据bid 发送请求,获取单个商品书籍信息;
      this.getData()
    },
    methods: {
      async getData() {
        this.book = await findOneBook(this.bid)
        // 如果返回空对象,需要跳转回列表页
        Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
      },
    },
    computed: {
      bid() {
        return this.$route.params.bid
      },
      path() {
        return this.$route.path
      }
    },
    watch: {
      path() {
        let pathArr = this.path.split('/')
        if(pathArr[1] === 'detail') {
          this.getData()
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ccc;
    z-index: 4;
  }
</style>
