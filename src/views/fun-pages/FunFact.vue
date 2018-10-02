<template>
  <div class="fun-page fun-fact container">
    <fun-page-head title="یک مطلب در مورد جهان هستی بگو که برگام بریزه!" image="leaf.png" />

    <content-box :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/fun-facts"
  import randomContent from "../../common/randomContent"
  import {requestToSendContent} from "../../common/utilities"
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'FunFact',
    components: {FunPageHead, ContentBox},
    data()
    {
      return {
        content: '',
      }
    },

    mounted()
    {
      randomContent.setContents(contents, 'fun-facts');
      let content = randomContent.getRandomContent();
      this.content = content.content;

      if (randomContent.allItemsRead)
        requestToSendContent();
    },
  }
</script>
