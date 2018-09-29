<template>
  <div id="app">
    <div id="top-lines">
      <span class="n1"></span>
      <span class="n2"></span>
      <span class="n3"></span>
      <span class="n4"></span>
      <span class="n5"></span>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <footer-part/>
  </div>
</template>

<style lang="scss">
  @import "./../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css";
  @import "./../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
  @import "./assets/fonts/vazir-webfont/stylesheet.css";
  @import "./assets/fonts/mikhak-webfont/stylesheet.css";
  @import "./assets/styles/main";
</style>

<script>
  import FooterPart from "./components/FooterPart";

  export default {
    components: {FooterPart}
  }
</script>