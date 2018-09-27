<template>
  <div class="fun-page fun-fact container">
    <div class="col-md-12 page-head">
            <span class="page-icon">
              <img src="./../../assets/images/leaf.png">
            </span>
      <span class="page-title">یک مطلب در مورد جهان هستی بگو که برگام بریزه!</span>

      <router-link class="back-btn mr-auto" to="/help">
        <img src="./../../assets/images/back-icon.png" height="15">
        بازگشت
      </router-link>
    </div>

    <content-box :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox"
  import contents from "../../data/fun-facts"
  import randomContent from "../../common/randomContent"

  export default {
    name: 'FunFact',
    components: {ContentBox},
    data()
    {
      return {
        content: '',
        randomContent: randomContent,
      }
    },

    mounted()
    {
      randomContent.setContents(contents, 'fun-facts');
      let content = randomContent.getRandomContent();
      this.content = content.content;
    },
  }
</script>
