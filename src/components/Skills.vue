<template>
  <div class="skills">
     <div class="skills__title">
      <h2>{{"Skills" | capitalize}} ❤️❤️❤️</h2>
    </div>
    <div class="skills__list">
      <div class="skills__category">
        <p>HTML <span class="orange">★★★★</span>★</p>
        <p>CSS <span class="orange">★★★</span>★★</p>
        <p>JavaScript <span class="orange">★★★★</span>★</p>
      </div>
      <div class="skills__category">
        <p>Vue.js <span class="orange">★★★★</span>★</p>
        <p>React <span class="orange">★★</span>★★★</p>
      </div>
      <div class="skills__category">
        <p>Node.js <span class="orange">★★★★</span>★</p>
        <p>Express.js <span class="orange">★★★★</span>★</p>
        <p>TypeScript <span class="orange">★★</span>★★★</p>
        <p>GraphQL <span class="orange">★★</span>★★★</p>
      </div>
      <div class="skills__category">
        <p>RDBMS / MySQL <span class="orange">★★★★</span>★</p>
        <p>NoSQL / MongoDB <span class="orange">★★★</span>★★</p>
      </div>
      <div class="skills__category">
        <p>Basic web apps hosting. DigitalOcean, AWS EC-2</p>
        <p>Static sites hosting. Firebase, Netlify</p>
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.skills__list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills__category {
  flex-basis: 15rem;
}

.skills__title {
  background-color: white;
  padding: 0 1rem;
  align-self: center;
}

.skills__title > h2 {
  font-size: 2rem;
  color: #00c853;
  margin: 0;
}

.orange {
  color: orange;
}

/* .skills__category >p{
  background-color: white;
} */

@media (max-width: 40rem) {
  .skills__list {
    flex-direction: column;
  }
  .skills__category > p{
    padding: 1rem;
  }
}
</style>
