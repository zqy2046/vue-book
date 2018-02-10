<template>
  <div class="content-wrap">
    <m-header :back='true'><h1>首页</h1></m-header>
    <div class="content">
      <slider :swiperSliders="sliders"></slider>
      <hot-book-list :books="hotBookList"></hot-book-list>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import Slider from '../base/Slider'
  import HotBookList from '../base/HotBookList'
  import {getSlidersData, getHotBookData} from '../api'
  
  export default {
    name: 'home',
    data() {
      return {
        sliders: [],
        hotBookList: []
      }
    },
    created() {
      this.getSliders()
      this.getHotBook()
    },
    methods: {
      async getSliders() {
        this.sliders = await getSlidersData()
      },
      async getHotBook() {
        this.hotBookList = await getHotBookData()
      }
    },
    components: {
      MHeader, Slider, HotBookList
    }
  }
</script>

<style scoped>

</style>
