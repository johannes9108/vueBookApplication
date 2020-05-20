<template>
  <section class="library">
    <h1>8 Classic Childrens books</h1>
    <div class="bookContainer">
      <router-link
        v-bind:key="book.id"
        v-for="book in this.$store.state.books"
        :to="{name: 'book', params:{bookId: book.id}}"
      >
        <BookCover class="bookCover small" :data="book" />
      </router-link>

      <!--Går även att skriva /book/ + item.id -->
      <!-- <div class="bookLink" v-bind:style="{backgroundColor: item.color}">{{item.title}}</div> -->
    </div>
  </section>
</template>

<script>
import BookCover from "../components/BookCover";

export default {
  name: "Library",
  components: {
    BookCover
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
section {
  display: flex;
  flex-flow: column nowrap;
  // height: 100%;

  width: 100%;
  height: 100%;
  padding: 2rem;
}
.bookContainer {
  flex-grow: 1;
  display: grid;
  // grid-auto-columns: 1fr 1fr 1fr 1fr;
  // flex-flow: row wrap;

  gap: 1rem;
  @media screen and (min-width: 1px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    // grid-auto-rows: 31%;
  }
}
</style>
