<template>
  <div class="fun-list container">
    <div class="row">
      <router-link class="list-item col-md-12" to="/fun/fact">
            <span class="list-image">
              <img src="./../assets/images/leaf.png">
            </span>
        <span class="list-title">یک مطلب در مورد جهان هستی بگو که برگام بریزه!</span>
      </router-link>

      <router-link class="list-item col-md-12" to="/fun/joke">
            <span class="list-image">
              <img src="./../assets/images/joke.png" width="70">
            </span>
        <span class="list-title">یک جک بگو که تا حالا نشنیدم!</span>
      </router-link>

      <router-link class="list-item col-md-5" to="/fun/marry/woman">
            <span class="list-image">
              <img src="./../assets/images/woman.png" height="70">
            </span>
        <span class="list-title">زن می‌خوام!</span>
      </router-link>

      <router-link class="list-item col-md-5" to="/fun/marry/man">
            <span class="list-image">
              <img src="./../assets/images/man.png" height="70">
            </span>
        <span class="list-title">شوهر می‌خوام!</span>
      </router-link>

      <router-link class="list-item col-md-12" to="/fun/far-galaxy">
            <span class="list-image">
              <img src="./../assets/images/poker.png" width="70">
            </span>
        <span class="list-title">میخوام برم به یک کهکشان دیگه...</span>
      </router-link>

      <router-link class="list-item col-md-12" to="/fun/devil">
            <span class="list-image">
              <img src="./../assets/images/devil.png" width="70">
            </span>
        <span class="list-title">همکاری با مادر ابلیس!</span>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FunList',
  }
</script>
