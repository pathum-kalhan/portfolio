<template>
  <div class="freelance">
    <h2 class="section-title">FREELANCE PROJECTS 👨‍💻</h2>
    <div class="freelance__stats">
      <div class="freelance__stat">9 Clients</div>
      <div class="freelance__stat">8 Projects</div>
    </div>
    <div class="freelance__projects">
      <template v-for="(n,i) in projects">
        <app-card :key="i" class="freelance__project" :project="n"></app-card>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Card from './Card.vue';
import projectsList from '../projectsList';

export default {
  components: {
    'app-card': Card,
  },
  data() {
    return {
      projects: projectsList,
    };
  },
};
</script>

<style>
.freelance__stats {
  display: flex;
}

.freelance__stat {
  flex: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}

.freelance__projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.freelance__project {
  flex-basis: 25rem;
}
</style>
