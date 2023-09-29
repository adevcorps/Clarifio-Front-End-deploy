<template>
  <web-header />
  <router-view />
  <web-footer />
</template>

<style scoped></style>
<script lang="ts">
import Header from '@/layouts/header/HeaderBar.vue'
import Footer from '@/layouts/footer/FooterBar.vue'
export default {
  name: 'web-layout',
  components: {
    'web-header': Header,
    'web-footer': Footer
  },
  setup() {
    return {}
  }
}
</script>
