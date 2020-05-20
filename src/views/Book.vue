<template>
  <div class="bookView">
    <nav>
      <router-link to="/">
        <div class="backButton"></div>
      </router-link>
    </nav>
    <div class="bookWrapper">
      <BookCover class="bookCover big" :data="findBookItem" />
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
      let dataItem = this.$store.getters.getBook(id);
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
  background-color: rgb(39, 38, 38);
  height: 100%;
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
  background-color: rgb(39, 38, 38);
  padding: 3rem;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100%;
  gap: 2rem;

  @media screen and (min-width: 1px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 25%;
    // background-color: sandybrown;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 40%;
    // background-color: red;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 100%;
    // background-color: teal;
  }
}
.bookCover {
  color: black;
  font-size: 2rem;
}
</style>