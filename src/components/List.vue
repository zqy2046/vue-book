<template>
  <div>
    <m-header :back="true">
      <h1>列表页</h1>
    </m-header>
    <div class="content">
      <ul>
        <li v-for="(book,index) in bookLists" :key="index">
          <div class="left">
            <img :src="book.bookImage" alt="">
          </div>
          <div class="right">
            <h2>{{book.bookName}}</h2>
            <p class="book-info">{{book.bookInfo}}</p>
            <p class="book-price">¥{{book.bookPrice}}</p>
            <button class="remove" @click="remove(book.bookId)">删除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {getBooks, removeBook} from '../api'
  
  export default {
    name: 'list',
    data() {
      return {
        bookLists: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        this.bookLists = await getBooks()
      },
      async remove(id) {
        await removeBook(id)
        // 更新视图;
        this.bookLists = this.bookLists.filter((item) => {
          console.log(item)
          return item.bookId !== id
        })
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .content {
    width: 100%;
    ul {
      padding: 10px;
      li {
        width: 100%;
        display: flex;
        padding: 15px 0 15px 0;
        .left {
          flex: 1;
          img {
            vertical-align: middle;
            width: 100%;
          }
        }
        .right {
          flex: 2;
          padding: 15px;
          h2 {
            font-weight: normal;
          }
          .book-info {
            font-size: 12px;
            line-height: 1.2;
            text-indent: 2em;
          }
          .book-price {
            color: orangered;
          }
          .remove {
            background-color: orange;
            border-radius: 10px;
            width: 50px;
            height: 20px;
            border: none;
            line-height: 20px;
            outline: none;
          }
        }
      }
    }
  }
</style>
