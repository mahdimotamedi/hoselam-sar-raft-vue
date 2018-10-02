<template>
  <div class="fun-page far-galaxy container">
    <fun-page-head title="در یک کهکشان دیگر..." image="poker.png" />

    <content-box :content="content" :poetry="poetry" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/far-galaxy"
  import randomContent from "../../common/randomContent"
  import {requestToSendContent} from "../../common/utilities";
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'FarGalaxy',
    components: {FunPageHead, ContentBox},
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
