<template>
  <div class="fun-page joke container">
    <fun-page-head title="یک جک بگو که تا حالا نشنیدم!" image="joke.png" />

    <content-box :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  import contents from "../../data/jokes"
  import randomContent from "../../common/randomContent";
  import {requestToSendContent} from "../../common/utilities";
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'Joke',
    components: {FunPageHead, ContentBox},

    data()
    {
      return {
        content: '',
      }
    },

    mounted()
    {
      randomContent.setContents(contents, 'jokes');
      let content = randomContent.getRandomContent();
      this.content = content.content;

      if (randomContent.allItemsRead)
        requestToSendContent();
    },
  }
</script>
