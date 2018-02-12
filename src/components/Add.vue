<template>
  <div class="add-wrap">
    <m-header :back="true"><h1>添加</h1></m-header>
    <div class="detail">
      <m-header :back="true">添加图书</m-header>
      <dl class="book">
        <dd>
          <label for="bookName">书籍名称</label>
          <input type="text" id="bookName" v-model="book.bookName">
        </dd>
        <dd class="price">
          <label for="bookInfo">书籍详情</label>
          <textarea cols="15" rows="5" id="bookInfo" v-model="book.bookInfo"></textarea>
        </dd>
        <dd class="price">
          <label for="bookPrice">书籍价格</label>
          <input id="bookPrice" v-model="book.bookPrice"></input>
        </dd>
        <dd class="price">
          <label for="bookImage">书籍封面</label>
          <input  id="bookImage" v-model="book.bookImage"></input>
        </dd>
        <dd>
          <input type="button" @click="add" value="确认添加">
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader'
  import {addBook} from '../api'
  export default {
    name: 'add',
    data() {
      return {
        book: {}
      }
    },
    methods: {
      async add() {
        if(Object.keys(this.book).length) {
          await addBook(this.book)
          this.$router.push('./list')
        }
      }
    },
    components: {
      MHeader
    }
  }
</script>
<style scoped lang="less">
  .add-wrap{
    width: 100%;
    height:100%;
    position:absolute;
    top: 0;
    .detail {
      width: 100%;
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
  }
</style>
