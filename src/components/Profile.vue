<template>
  <div class="profile">
    <h2 class="sub-title">{{'Personal Profile'|capitalize}} 😁🤪😁</h2>
    <p class="profile__text">I am a full stack JavaScript developer based on Homagama,
       Sri Lanka with 2+ years of industry
experience. My main concern is cutting edge technologies and ‘engineering’ rather than building
somehow. Apart from Software engineering, Running,Hanging out with my friends and Watching
cartoons are my interests.
</p>
<div class="profile-links">
  <h2>Links</h2>
  <a href="https://stackoverflow.com/users/7346647/pathum-kalhan?tab=profile">Stack Overflow Profile</a>
  <a href="https://www.linkedin.com/in/pathum-kalhan-978336197/">LinkedIn Profile</a>
</div>
  </div>

</template>

<script>
// @ is an alias to /src

import capitalize from '../mixins/capitalize';

export default {
  mixins: [capitalize],

};
</script>
<style>
.profile {
  padding-bottom: 3rem;
}
.profile__text {
  padding: 1rem;
  text-align: justify;
  /* background-color: white; */
}
.profile-links {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
