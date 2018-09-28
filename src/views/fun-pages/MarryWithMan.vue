<template>
  <div class="fun-page marry container">
    <div class="col-md-12 page-head">
            <span class="page-icon">
              <img src="./../../assets/images/man.png">
            </span>
      <span class="page-title">شوهر می‌خوام!</span>

      <router-link class="back-btn mr-auto" to="/help">
        <img src="./../../assets/images/back-icon.png" height="15">
        بازگشت
      </router-link>
    </div>

    <content-box
        :image="image"
        :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  import contents from "../../data/men"
  import randomContent from "../../common/randomContent";

  export default {
    name: 'MarryWithMan',
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
      randomContent.setContents(contents, 'men');
      let content = randomContent.getRandomContent();
      this.content = content.content;
      this.image = content.image;

      if (randomContent.allItemsRead);
        alert ("دوست عزیز به خدا شوهرامون همینا بود. 7 میلیارد آدمن یک آدمی چیزی پیدا کن باو! مرسی اه :|");
    },
  }
</script>
