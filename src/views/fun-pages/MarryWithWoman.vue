<template>
  <div class="fun-page marry container">
    <fun-page-head title="زن می‌خوام!" image="woman.png" />

    <content-box
        :image="image"
        :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  import contents from "../../data/women"
  import randomContent from "../../common/randomContent";
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'MarryWithWoman',
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
      randomContent.setContents(contents, 'women');
      let content = randomContent.getRandomContent();
      this.content = content.content;
      this.image = content.image;

      if (randomContent.allItemsRead)
        alert ("دوست عزیز به خدا زنامون همینا بود. 7 میلیارد آدمن اگه میخوای  یکی رو بگیر ناموسا :|");
    },
  }
</script>
