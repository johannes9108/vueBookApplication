<template>
  <section class="library">
    <h1>8 Classic Childrens books</h1>
    <div class="bookContainer">
      <router-link
        v-bind:key="item.id"
        v-for="item in books"
        :to="{name: 'book', params:{bookId: item.id}}"
      >
        <BookCover class="bookCover" :data="item" />
        <!--Går även att skriva /book/ + item.id -->
        <!-- <div class="bookLink" v-bind:style="{backgroundColor: item.color}">{{item.title}}</div> -->
      </router-link>
    </div>
  </section>
</template>

<script>
import BookCover from "../components/BookCover";

export default {
  name: "Library",

  data() {
    return {
      books: this.$root.books
    };
  },
  components: {
    BookCover
  }
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  padding: 2rem;
}
.bookContainer {
  flex-grow: 1;
  display: grid;
  gap: 2rem;
  @media screen and (min-width: 1px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
