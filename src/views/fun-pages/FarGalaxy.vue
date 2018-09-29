<template>
  <div class="fun-page far-galaxy container">
    <div class="col-md-12 page-head">
            <span class="page-icon">
              <img src="./../../assets/images/poker.png">
            </span>
      <span class="page-title">در یک کهکشان دیگر...</span>

      <router-link class="back-btn mr-auto" to="/help">
        <img src="./../../assets/images/back-icon.png" height="15">
        بازگشت
      </router-link>
    </div>

    <content-box :content="content" :poetry="poetry" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/far-galaxy"
  import randomContent from "../../common/randomContent"
  import {requestToSendContent} from "../../common/utilities";

  export default {
    name: 'FarGalaxy',
    components: {ContentBox},
    data()
    {
      return {
        content: '',
        poetry: false,
      }
    },

    mounted()
    {
      randomContent.setContents(contents, 'far-galaxy');
      let content = randomContent.getRandomContent();
      this.content = content.content;
      this.poetry = content.poetry;

      if (randomContent.allItemsRead)
        requestToSendContent();
    },
  }
</script>
