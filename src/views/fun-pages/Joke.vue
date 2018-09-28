<template>
  <div class="fun-page joke container">
    <div class="col-md-12 page-head">
            <span class="page-icon">
              <img src="./../../assets/images/joke.png">
            </span>
      <span class="page-title">یک جک بگو که تا حالا نشنیدم!</span>

      <router-link class="back-btn mr-auto" to="/help">
        <img src="./../../assets/images/back-icon.png" height="15">
        بازگشت
      </router-link>
    </div>

    <content-box :content="content" />
  </div>
</template>

<script>

  import ContentBox from "../../components/ContentBox";
  import contents from "../../data/jokes"
  import randomContent from "../../common/randomContent";
  import {requestToSendContent} from "../../common/utilities";

  export default {
    name: 'Joke',
    components: {ContentBox},

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
