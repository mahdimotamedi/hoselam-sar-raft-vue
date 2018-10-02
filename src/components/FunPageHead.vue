<template>
  <div class="col-md-12 page-head">
    <span class="page-icon">
      <img :src="require('./../assets/images/' + image)">
    </span>
    <span class="page-title">{{ title }}</span>

    <router-link class="back-btn mr-auto" to="/help">
      <img src="./../assets/images/back-icon.png" height="15">
      بازگشت
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FunPageHead',
    props: ['title', 'image'],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
