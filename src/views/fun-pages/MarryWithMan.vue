<template>
  <div class="fun-page marry container">
    <fun-page-head title="شوهر می‌خوام!" image="man.png" />

    <content-box
        :image="image"
        :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  import contents from "../../data/men"
  import randomContent from "../../common/randomContent";
  import FunPageHead from "../../components/FunPageHead";

  export default {
    name: 'MarryWithMan',
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
      randomContent.setContents(contents, 'men');
      let content = randomContent.getRandomContent();
      this.content = content.content;
      this.image = content.image;

      if (randomContent.allItemsRead)
        alert ("دوست عزیز به خدا شوهرامون همینا بود. 7 میلیارد آدمن یک چیزی پیدا کن باو! مرسی اه :|");
    },
  }
</script>
