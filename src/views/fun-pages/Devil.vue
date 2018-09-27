<template>
  <div class="fun-page devil container">
    <div class="col-md-12 page-head">
            <span class="page-icon">
              <img src="./../../assets/images/devil.png">
            </span>
      <span class="page-title">همکاری با مادر ابلیس!</span>

      <router-link class="back-btn mr-auto" to="/help">
        <img src="./../../assets/images/back-icon.png" height="15">
        بازگشت
      </router-link>
    </div>

    <content-box content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جام." />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  export default {
    name: 'Devil',
    components: {ContentBox},
  }
</script>
