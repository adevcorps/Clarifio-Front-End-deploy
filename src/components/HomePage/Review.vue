<template>
  <section class="bg-[#53389E] mt-28 px-6 pb-12 max-md:mt-14">
    <div class="container mx-auto">
      <div class="w-full flex flex-col items-center">
        <h1 class="text-white font-primary font-semibold text-[36px] my-14 max-md:my-7 max-md:text-center max-md:leading-9">
          Don't take our word
        </h1>
        <div class="w-full bg-[#FFFFFF] border rounded-xl">
          <carousel :items-to-show="1">
            <slide v-for="slide in 3" :key="slide">
              <CarouselItem />
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <div class="flex flex-row justify-center mb-2">
            <!-- <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <rect y="0.344238" width="10" height="10" rx="5" fill="#53389E" />
            </svg>
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <rect
                y="0.344238"
                width="10"
                height="10"
                rx="5"
                fill="#9E77ED"
                fill-opacity="0.33"
              />
            </svg>

            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.344238"
                width="10"
                height="10"
                rx="5"
                fill="#9E77ED"
                fill-opacity="0.33"
              />
            </svg> -->
          </div>
          <div class="flex flex-row justify-center">
            <img src="../../assets/images/home/review/review.png" />
          </div>
          <!-- <Carousel /> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import CarouselItem from '../common/CarouselItem.vue'
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CarouselItem
  },
};
</script>
