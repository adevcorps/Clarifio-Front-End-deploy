<template>
  <div class="min-w-[184px] text-center mx-11 mb-16 max-sm:w-full">
    <div
      class="bg-white flex items-center justify-center mx-auto rounded-full w-[184px] h-[184px] shadow-2xl mb-[22.82px]"
    >
      <img :src="imageSource"/>
    </div>
    <p
      class="font-primary text-primary text-[30px] mx-auto leading-10 font-extrabold max-md:bottom-5 max-sm:bottom-0"
    >
      {{name}}
    </p>
  </div>
</template>
<script>
export default
{
    props: ['imageSource', 'name']
}
</script>


