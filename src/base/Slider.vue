<template>
  <swiper :options='swiperOption'>
    <!-- slides -->
    <swiper-slide v-for='(slider,index) in swiperSliders' :key='index'>
      <img :src="slider" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class='swiper-pagination' slot='pagination'></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props: ['swiperSliders'],
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3000,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true
        }
      }
    }
  }
</script>
<style lang="less">
  img {
    width: 100%
  }
</style>

