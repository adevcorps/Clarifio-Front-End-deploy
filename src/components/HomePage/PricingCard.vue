<template>
  <div
    class="my-2 w-[305px] bg-white border rounded-xl bg-pricing-card-bg dark:bg-gray-800 dark:border-gray-700 max-md:w-[299px] max-xl:mx-2"
  >
    <div class="text-center mt-8">
      <p class="font-primary text-2xl font-bold text-card-subtitle">
        Verification Credits
      </p>
      <p class="font-primary text-xs text-primary">
        {{ count }} never expiring verification credits
      </p>
    </div>
    <div class="p-5 text-center">
      <p class="mb-5 text-sm font-primary font-semibold dark:text-white text-center">
        ONE TIME PRICE
      </p>
      <p class="text-4xl font-primary font-semibold mb-5">only ${{ price }}</p>
      <p class="text-[13.154px] text-[#64607D] font-bold font-primary mb-3">
        YOU CAN USE FOR
      </p>
      <p class="text-[14.35px] text-primary font-bold font-primary mb-3">
        - Email Checker
      </p>
      <p class="text-[14.35px] text-primary font-bold font-primary mb-3">
        - Email List Cleaning
      </p>
      <p class="text-[14.35px] text-primary font-bold font-primary mb-3">
        - Bulk Email Verification
      </p>
      <p class="text-[14.35px] text-primary font-bold font-primary mb-3">
        - ESP Integration Import
      </p>
      <p class="text-[14.35px] text-primary font-bold font-primary mb-3">
        - Email Verification API
      </p>
    </div>
    <div class="flex flex-row p-5 justify-between">
      <a
        class="text-sm text-primary font-primary flex items-center font-bold leading-10 cursor-pointer"
        >More Details
        <img src="../../assets/images/home/pricing/r-arrow.png" class="h-1/2"
      /></a>
      <router-link to="/user/buy-credits-detail">
        <button class="py-2 px-4 w-50 bg-[#2078BE] text-white rounded-full font-medium">
          BUY NOW
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["price", "count"],
};
</script>
