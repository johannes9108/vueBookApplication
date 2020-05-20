<template>
  <div class="bookDetails">
    <h1>{{data.title}}</h1>
    <h5>By {{data.author}}</h5>
    <p>{{data.plot}}</p>
    <div class="details">
      <ul>
        <li>
          <b>Audience:</b>
          {{data.audience}}
        </li>
        <li>
          <b>Pages:</b>
          {{data.pages}}
        </li>
        <li>
          <b>First Published:</b>
          {{data.year}}
        </li>
        <li>
          <b>Publisher:</b>
          {{data.publisher}}
        </li>
      </ul>
    </div>
    <button>Oh, I want to read it!</button>
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
.bookDetails {
  color: rgb(142, 142, 142);
  height: 100%;
}
b {
  color: white;
  margin-right: 5px;
}
.details {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    list-style-type: none;
  }
  background-color: rgb(19, 15, 15);
}
</style>