<template>
  <div class="skills">
    <h1 class="skills__title">SKILLS ❤️❤️❤️</h1>
    <div class="skills__items">
      <div class="category">
        <div class="category__item">
          HTML
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          CSS
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          JavaScript
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      <div class="category">
        <div class="category__item">
          Vue.js
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          React
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      <div class="category">
        <div class="category__item">
          Node.js
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          Express.js
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          GraphQL
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      <div class="category">
        <div class="category__item">
          RDBMS / MySQL
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="category__item">
          NoSQL / MongoDB
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  filters: {
    capitalize(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
  },
};
</script>

<style>
.skills {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin:auto
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  align-self: stretch
  /* justify-content: space-between */
}

.skills__title{
   padding: 0 1rem;
}

.category {
  flex-basis: 20rem;
  display: flex;
  flex-direction: column;
  flex: 1
}

.category__item {
  border: 1px solid green;
  margin: 1rem;
  text-align: center;
  padding: 1rem;
  background: white;
}

.checked {
  color: orange;
}

@media(max-width: 40rem){
  .skills__items{
    flex-direction: column
  }
}
</style>
