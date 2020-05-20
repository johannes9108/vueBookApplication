<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: this.$root.books
    };
  },
  components: {}
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
  background-image: linear-gradient(
    to right,
    rgb(90, 183, 245),
    rgb(82, 151, 168)
  );
  // height: 100vh;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  line-height: 1.6;
  color: #2c3e50;
}
</style>
