<template>
  <div class="certificates">
    <h2 class="sub-title">{{'Cources and Certificates' | capitalize}} 🏆</h2>
    <ul>
        <li>Advanced National Diploma in English, National Youth Services Council</li>
        <li>Graphic Design {{'&'}} Creativity Development</li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-1a49713c-b839-43de-aa20-125dff7949c6/" target="_blank" rel="noopener noreferrer">
          Certificate in React</a>
          </li>
        <li>
          <a href="https://www.udemy.com/certificate/UC-abcda6c3-a73a-4865-8ad0-9187dc5b52d6/" target="_blank" rel="noopener noreferrer">
          Certificate in CSS</a>
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
.certificates{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
</style>
