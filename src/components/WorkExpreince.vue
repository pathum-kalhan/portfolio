<template>
  <div class="work-expreince">
    <h2 class="sub-title">{{'Work Expreince' | capitalize}} 👨‍🔧</h2>
    <ul class="work-expreince__list">
        <li>
          Igate technologies (2018 Feb to 2019 March)
          <ul>
            <li>Vue.js / Vuetify</li>
            <li>Node.js / Express.js</li>
            <li>MySQL</li>
            <li>DigitalOcean</li>
          </ul>
          </li>
        <li>
          Eatme global (2019 April to Percent)
          <ul>
            <li>Vue.js / Vuetify</li>
            <li>Node.js / Express.js</li>
            <li>MySQL / MongoDB</li>
            <li>AWS EC-2</li>
          </ul>
          </li>

    </ul>
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
.work-expreince{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.work-expreince__list{
  /* background-color: hotpink; */
}
</style>
