<template>
  <div class="w-full flex justify-between">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Buy Credits</h1>
      <p class="py-[9px] text-[16px] font-primary">Buy credits based on pricing plan.</p>
    </div>
    <div class="w-4/12 flex justify-between items-center">
      <div class="w-6/12 text-center">
        <p class="text-[18px] text-[#344054] font-primary">Actual Credit</p>
        <p class="text-[18px] text-[#344054] font-primary font-bold">123</p>
      </div>
      <div class="w-6/12 flex justify-center items-center">
        <!-- <button
          class="py-2.5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] font-semibold"
        >
          Buy Credit
        </button> -->
      </div>
    </div>
  </div>
  <div class="w-full">
    <Pricing v-bind:imageShow="imgFlag" />
  </div>
</template>
<script setup>
var imgFlag = false;
import Pricing from "../../../components/HomePage/Pricing.vue";
</script>
