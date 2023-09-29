<template>
  <section class="relative bg-[url('@/assets/images/home/real-time/bg.png')] bg-100-100 bg-no-repeat bg-center max-lg:bg-cover">
    <img
      src="@/assets/images/home/bulk-email/Polygon-1.png"
      class="absolute left-0 bottom-3"
    />
    <img src="@/assets/images/home/bulk-email/poly2.png" class="absolute right-0 top-5" />
    <div class="mx-auto container max-xl:max-w-[100%] max-xl:px-5">
      <div class="bg-contain justify-between relative flex flex-wrap mt-24 py-20 max-md:mt-0 pt-20 max-lg:pt-10">
        <div
          class="lg:w-5/12 prose font-primary md:w-full sm:w-full sm:mb-5 md:mb-5 z-10"
        >
          <div class="mx-auto w-full pr-14 max-md:w-full max-md:px-0 justify-center">
            <div class="w-full flex items-center">
              <img src="@/assets/images/home/real-time/mail.png" class="max-md:my-7 max-md:w-14"/>
            </div>
            <h2 class="text-4xl mt-0 mb-5 text-white max-md:my-0 max-md:text-[36px] max-md:leading-[1.2]">Real Time Email Verification Api</h2>
            <p class="text-xl mb-10 pr-14 leading-9 text-white max-md:pr-0 max-md:mb-5">
              As soon as the email is typed in the signup form, our API checks it to
              verify the origin of the email address and filters out the unnecessary ones.
            </p>
          </div>
        </div>
        <div class="lg:w-7/12 flex pl-1 justify-end md:w-full sm:w-full">
          <img src="@/assets/images/home/bulk-email/table.png" class="max-md:w-full max-lg:w-full max-xl:object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { containerMaxW } from "@/config.js";
</script>

