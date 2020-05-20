<template>
  <div class="bookView">
    <nav>
      <router-link to="/">
        <div class="backButton"></div>
      </router-link>
    </nav>
    <div class="bookWrapper">
      <BookCover class="bookCover" :data="findBookItem" />
      <BookDetails class="bookDetails" :data="findBookItem" />
    </div>
  </div>
</template>
<script>
import BookCover from "../components/BookCover.vue";
import BookDetails from "../components/BookDetails.vue";

export default {
  data() {
    return {};
  },
  components: {
    BookCover,
    BookDetails
  },

  computed: {
    findBookItem() {
      let id = this.$route.params.bookId;
      let dataItem = this.$root.getBook(id);
      console.log(dataItem);
      return dataItem;
    }
  }
};
</script>

<style lang="scss" scoped>
.bookView {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background-color: rgb(39, 38, 38);
}
nav {
  padding: 0 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  .backButton {
    border-radius: 100%;
    background-image: url("../assets/ic_keyboard_backspace_black_48dp.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 75px;
    height: 75px;
    background-color: gray;
  }
}
.bookWrapper {
  padding: 3rem;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.bookCover {
  color: black;
  font-size: 2rem;
}
</style>