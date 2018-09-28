<template>
  <div class="col-md-12 content-box">
    <p v-bind:class="{ poetry: poetry }">
      <img :src="require('../assets/images/' + image)" v-if="image">
      <span v-html="content"></span>
    </p>

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: ['content', 'image', 'poetry'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
