<template>
  <div>
    <swiper
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      direction="vertical"
      :slidesPerView="1"
      :mousewheel="true"
      :pagination="{ clickable: true }"
      class="index_swiper"
      :speed="1000"
    >
      <!-- :autoplay="{ delay: 3000, stopOnLastSlide: false, disableOnInteraction:
      true, }" -->
      <!-- :loop="true" -->
      <!-- :slidesPerGroup="1" -->
      <swiper-slide class="first_slide">
        <div class="first_box">
          <p>Welcome</p>
          <p>to</p>
          <p>browse</p>
        </div>
      </swiper-slide>
      <swiper-slide class="second_slide">
        <div class="second_box">
          <img src="/img/BG_03.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide class="third_slide">
        <div class="third_box">
          <p>
            I'm a allround designer specialized in User Experience. I love the
            challenge of making applications user friendly and good looking. I
            live and breathe User Centered design and like to think with a
            innovative mindset when solving challenges. I'm used to working with
            scrumteams and multiple disciplines on projects with a mayor scope
            in corporate and Agile environments.
          </p>
          <p>
            <a class="button" href="/">Connect on Linked-In</a>
          </p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide class="first_slide">
        <div class="first_box">
          <p>Welcome</p>
          <p>to</p>
          <p>browse</p>
        </div>
      </swiper-slide> -->
      <!-- <swiper-slide
        :class="`index_swiper_${index}`"
        v-for="(item, index) in img"
        :key="index"
      >
        <img :src="item.src" alt="" />
      </swiper-slide> -->
    </swiper>
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Mousewheel, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Mousewheel, Pagination])
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      img: [
        {
          src: '/img/BG_02.jpg',
        },
        {
          src: '/img/BG_03.jpg',
        },
        {
          src: '/img/BG_04.jpg',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>
<style lang="scss">
@import '../styles/index.scss';
</style>