<template>
  <div class="homepage container">
      <div class="row">
        <div class="col-md-6 text-center">
          <h1>حوصلم پوکید !!</h1>
            <router-link to="/help" class="btn btn-outline-success">کمک</router-link>
        </div>
        <div class="col-md-6 text-center d-none d-md-block">
          <img src="../assets/images/homepage-logo.png" class="homepage-image">
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
