<template>
  <div class="homepage container">
      <div class="row">
        <div class="col-md-6 text-center">
          <h1>حوصلم پوکید !!</h1>
          <a href="#" class="btn btn-outline-success">کمک</a>
        </div>
        <div class="col-md-6 text-center">
          <img src="../assets/images/homepage-logo.png" class="homepage-image">
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterPart from "../components/FooterPart";

export default {
  name: 'home',
  components: {
      FooterPart,
  }
}
</script>
