<template>
  <div class="wrapper">
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/fonts.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  margin: 0 auto;
  max-width:1000px;
  padding-top: 50px;
  text-align: center;
  font-family: "PT Sans Caption", sans-serif;
}
</style>