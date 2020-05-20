<template>
  <div
    class="bookCover"
    :style="{backgroundImage: `linear-gradient(to top right, ${data.color}, rgb(255, 255, 255))`}"
  >
    <span>
      <h3>{{data.title}}</h3>
      <h6>{{data.author}}</h6>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.small {
  // width: 20%;
  height: 30vh;
}
.bookCover {
  color: white;
  border-radius: 2px;
  span {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    margin: 0 1rem;
    border-left: 3px solid black;
    padding: 0 1rem;
  }
  a,
  a:link,
  a:visited,
  a.router-link-exact-active {
    text-decoration: none;
  }
}
</style>