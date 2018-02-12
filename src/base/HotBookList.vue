<template>
  <div class="hot-book-list">
    <h3>热门图书</h3>
    <ul>
      <li class="book-item" v-for="(book,index) in books" :key="index">
        <div class="book-item-wrap">
          <img alt="" class="book-img" :src="book.bookImage">
          <span class="book-name">{{book.bookName}}</span>
          <span class="book-price">¥{{book.bookPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hot-book-list',
    props: ['books']
  }
</script>

<style scoped lang="less">
  .hot-book-list {
    h3{
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      box-sizing:border-box;
      .book-item {
        width: 50%;
        margin-top: 5px;
        height: auto;
        font-size: 12px;
        padding: 15px;
        box-sizing: border-box;
        .book-item-wrap {
          padding: 10px;
          img {
            width: 100%;
          }
          span {
            display: block;
            &.book-price{
              text-align: center;
              color:#f00;
            }
          }
        }
      }
    }
  }
</style>
