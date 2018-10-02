<template>
  <div class="fun-page devil container">
    <fun-page-head title="همکاری با مادر ابلیس!" image="devil.png" />

    <content-box :content="content" :image="image" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/devil"
  import randomContent from "../../common/randomContent"
  import {requestToSendContent} from "../../common/utilities"
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'Devil',
    components: {FunPageHead, ContentBox},
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
