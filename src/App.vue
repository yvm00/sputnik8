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
  max-width:1100px;
  padding-top: 30px;
  text-align: center;
  font-family: "PT Sans Caption", sans-serif;
}
.mt-10{
  margin-top: 10px;
}
.m-20{
  margin: 20px;
}
.m-30{
  margin: 30px;
}
.p-30{
  padding: 30px;
}
.ml-30{
  margin-left: 30px;
}
</style>