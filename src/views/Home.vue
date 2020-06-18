<template>
  <div>
     <app-freelance></app-freelance>
    <!--<app-fun></app-fun> -->
    <app-work></app-work>
    <app-skills class="margin-3"></app-skills>
    <app-education class="margin-3"></app-education>
    <app-cources class="margin-3"></app-cources>
    <app-profile class="margin-3"></app-profile>
  </div>

</template>

<script>
// @ is an alias to /src
import Freelance from '../components/Freelance.vue';
// import Fun from '../components/Fun.vue';
import Work from '../components/WorkExpreince.vue';
import Skills from '../components/Skills.vue';
import Education from '../components/Education.vue';
import Cources from '../components/Certificates.vue';
import Profile from '../components/Profile.vue';

export default {
  components: {
    'app-freelance': Freelance,
    // 'app-fun': Fun,
    'app-work': Work,
    'app-skills': Skills,
    'app-education': Education,
    'app-cources': Cources,
    'app-profile': Profile,
  },
  name: 'Home',

};
</script>

<style>

.margin-3{
  margin-top: 3rem;
}
</style>
