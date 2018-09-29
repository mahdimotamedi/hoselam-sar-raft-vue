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

    <content-box :content="content" :image="image" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/devil"
  import randomContent from "../../common/randomContent"
  import {requestToSendContent} from "../../common/utilities"

  export default {
    name: 'Devil',
    components: {ContentBox},
    data()
    {
      return {
        content: '',
        image: '',
      }
    },

    mounted()
    {
      randomContent.setContents(contents, 'devil');
      let content = randomContent.getRandomContent();
      this.content = content.content;
      this.image = content.image;

      if (randomContent.allItemsRead)
        requestToSendContent();
    },
  }
</script>
