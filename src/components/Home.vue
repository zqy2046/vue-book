<template>
  <div class="content-wrap">
    <m-header :back='true'><h1>首页</h1></m-header>
    <div class="content">
      <loading v-if="loading"></loading>
      <template v-else>
        <slider :swiperSliders="sliders"></slider>
        <hot-book-list :books="hotBookList"></hot-book-list>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import Slider from '../base/Slider'
  import HotBookList from '../base/HotBookList'
  import Loading from '../base/Loading'
  import {getAll} from '../api'
  
  export default {
    name: 'home',
    data() {
      return {
        sliders: [],
        hotBookList: [],
        loading: true,
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        let [sliders,hotBooks] = await getAll()
        this.sliders = sliders;
        this.hotBookList = hotBooks;
        this.loading = false;
      }
    },
    components: {
      MHeader, Slider, HotBookList, Loading
    }
  }
</script>

<style scoped lang="less">
  .content-wrap {
    width: 100%;
    height: auto;
    margin-bottom: 70px;
    position:absolute;
    top: 0;
  }
</style>
