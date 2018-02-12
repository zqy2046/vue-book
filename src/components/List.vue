<template>
  <div class="lists-wrap">
    <loading v-if="loading"></loading>
    <div class="content" v-else>
      <div class="list-wrap">
        <div v-for="(book,index) in bookLists"
                     class="list-item"
                     :key="index"
                     @click="locate(book)"
                     tag="div"
        >
          <div class="left">
            <img :src="book.bookImage" alt="">
          </div>
          <div class="right">
            <h2>{{book.bookName}}</h2>
            <p class="book-info">{{book.bookInfo}}</p>
            <p class="book-price">¥{{book.bookPrice}}</p>
            <button class="remove" @click.stop="remove(book.bookId)">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {getBooks, removeBook} from '../api'
  import Loading from '../base/Loading'

  export default {
    name: 'list',
    data() {
      return {
        bookLists: [],
        loading: true
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        this.bookLists = await getBooks();
        this.loading = false;
      },
      async remove(id) {
        await removeBook(id)
        // 更新视图;
        this.bookLists = this.bookLists.filter((item) => {
          return item.bookId !== id
        })
      },
      locate(book) {
        this.$router.push({name:'detail',params:{bid:book.bookId}})
      }
    },
    components: {
      MHeader,Loading
    }
  }
</script>

<style scoped lang="less">
  .lists-wrap{
    position:absolute;
    top: 40px;
    .content {
      width: 100%;
      .list-wrap {
        padding: 10px;
        .list-item {
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
  }
</style>
