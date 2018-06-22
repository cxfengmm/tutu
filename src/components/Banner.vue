<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item,index) in results"
        :key="index"
      >
        <img :src="item.banner_cover" alt="">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name:'Banner',
    components:{swiper, swiperSlide},
    props:{
      results:{}
    },
    data:function () {
      return {
        swiperOption:{
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }

  }
</script>

<style scoped>
  .banner{
    width: 100%;
    height:1.5rem;
    /*background: skyblue;*/
  }
  .swiper-container{
    width:100%;
    height:1.5rem;
    text-align: center;
  }
  .swiper-slide{
    width:100%;
    line-height:1.3rem;
  }
  .swiper-slide img{
    width:100%;
    height:1.5rem;
  }
</style>
