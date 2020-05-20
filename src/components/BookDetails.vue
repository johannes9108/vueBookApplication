<template>
  <div class="bookDetails">
    <div>
      <span class="title">{{data.title}}</span>
      <span class="author">By {{data.author}}</span>
    </div>
    <span class="plot">{{data.plot}}</span>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(142, 142, 142);
  height: 100%;

  @media screen and (min-width: 1px) {
    // grid-template-columns: 1fr;
  }
  @media screen and (min-width: 768px) {
    // grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    // grid-template-columns: repeat(4, 1fr);
  }
}
.title {
  color: white;
  display: block;
  font-size: 2.7rem;
  font-weight: 600;
}
.author {
  color: rgb(142, 142, 142);
  display: block;
  font-size: 1.8rem;
}
.plot {
  overflow: auto;
  min-height: 10vh;
  display: block;
  color: rgb(142, 142, 142);
  flex-grow: 1;
}
b {
  color: white;
  margin-right: 5px;
}
.details {
  padding: 1rem;
  border-radius: 2%;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    list-style-type: none;
  }
  background-color: rgb(19, 15, 15);
}
button {
  border: none;
  background-color: white;
  border-radius: 5px;
  margin: 1rem 0;
  width: 50%;
  height: 50px;
}
</style>