<template>
  <div class="detail">
    <m-header :back="true">详情页面</m-header>
    <dl class="book">
      <dt><h3>{{book.bookName}}</h3></dt>
      <dd>
        <img :src="book.bookImage" alt="">
      </dd>
      <dd>
        <label for="bookInfo">书籍名称</label>
        <input type="text" id="bookInfo" v-model="book.bookName">
      </dd>
      <dd class="price">
        <label for="bookPrice">书籍详情</label>
        <textarea name="" id="bookPrice" cols="10" rows="5" v-model="book.bookInfo"></textarea>
      </dd>
      <dd>
        <input type="button" @click="changeBook" value="提交">
      </dd>
    </dl>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {findOneBook, changeSomeBook} from '../api'
  
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
      async changeBook() {
        await changeSomeBook(this.book)
        this.$router.push('./list')
      }
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
        if (pathArr[1] === 'detail') {
          this.getData()
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .detail {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
    text-align: center;
    .book {
      dt {
        font-size: 18px;
        line-height: 28px;
      }
      dd {
        margin-top: 10px;
      }
      input {
        width: 200px;
      }
      label {
        vertical-align: top;
      }
      textarea {
        width: 200px;
        height: auto;
      }
    }
    img {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
    
  }
</style>
