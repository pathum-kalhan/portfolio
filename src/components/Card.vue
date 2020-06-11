<template>
    <div class="card">
        <h2 class="card__title">{{project.name}}</h2>
        <p class="card__text">{{project.description}}</p>
      <div class="card__actions">
      <router-link
      :to="{ name: 'project', params: { id: project.id }}"
       class="button">
       read more
       </router-link>

      </div>
    </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style>
.card {
  background-color: white;
  box-shadow: 7px 7px greenyellow;
  margin-bottom: 1rem;
  padding: 0.5rem;
  /* border-radius: 5px; */
}
.card__title {
  /* background-color: white; */
  /* border-radius: 5px; */
  text-align: center;
}
.card__text {
  padding: 1rem;
  text-align: center;
}

.card__actions {
  text-align: center;
  /* display: inline-block;
  margin: auto; */
}
.button {
  background: royalblue;
  padding: 0.5rem 1rem;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.button:hover {
  background: #5f7dda;
  color: white;

}
</style>
