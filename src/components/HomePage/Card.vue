<template>
  <div
    class="my-2 mb-11 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-xl:m-1"
  >
    <div class="flex justify-center mt-8">
      <img class="rounded-t-lg" src="@/assets/images/home/services.png" alt="" />
    </div>
    <div class="p-1">
      <h5
        class="mb-2 text-[17px] font-primary font-semibold tracking-tight text-gray-900 dark:text-white text-center"
      >
        {{ title }}
      </h5>
      <p class="mb-3 font-primary font-[500] text-gray-700 text-[15px] dark:text-gray-400 text-center">
       {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
        props: ['title', 'content']
    }
</script>
