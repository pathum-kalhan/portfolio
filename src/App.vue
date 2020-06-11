<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>


<script>
import Header from './components/Header.vue';

export default {
  components: {
    'app-header': Header,
  },
  data() {
    return {

    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap");
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
}
.sub-title {
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
  /* background-color: white; */
}
</style>
