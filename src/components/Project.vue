<template>
    <div class="project">
      <header class="project__header">
        <router-link to="/" class="back-button">{{'BACK'}}</router-link>
        <div class="project__title">
        <h1>{{project.name}}</h1>

        </div>

      </header>
        <h2 class="project__subtitle">Description</h2>
        <p class="project__description">{{project.descriptionLong}}</p>
        <h2 class="project__subtitle">Technologies {{'&'}} tools</h2>
        <div class="center">
        <ul>
            <li v-for="tech in project.techs" :key="tech">{{tech}}</li>
        </ul>

        </div>
         <h2 class="project__subtitle">Links</h2>
         <div class="center">
           <a :href="project.github"
            class="github"
            target="_blank"
            v-if="project.github">
            Github
            </a>

            <a :href="project.liveLink"
             class="liveUrl"
             v-if="project.liveLink"
             target="_blank">
             Live Link
             </a>
         </div>
          <h2 class="project__subtitle">Screenshots</h2>
    </div>
</template>

<script>
import projectsList from '../projectsList';

export default {
  mounted() {
    this.project = projectsList.find((e) => e.id === this.$route.params.id);
  },
  data() {
    return {
      project: null,
    };
  },
};
</script>

<style>
.project {
  background-color: #ccc;
}
.project__title {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  flex: 1;
  /* background:chartreuse */
}

.project__subtitle {
  text-align: center;
}

.project__description {
  text-align: center;
  padding: 1rem;
}

.center {
  /* text-align: center; */
  display: flex;
  justify-content: center;
}

.github {
  background: crimson;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.liveUrl {
  margin-left: 1rem;
  background: orangered;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.project__header {
  display: flex;
  align-items: center;
  /* margin-left:auto; */
  /* justify-content: space-between; */
}

.back-button {
  margin-left: 1rem;
  color: black;
  background: white;
  border: 1px solid black;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
}
</style>
