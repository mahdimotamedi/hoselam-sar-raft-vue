<template>
  <div class="col-md-12 content-box">
    <p>
      <img :src="require('../assets/images/' + image)" v-if="image">
      {{ content }}
    </p>

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: ['content', 'image'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
