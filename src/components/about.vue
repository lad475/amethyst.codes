<template>
  <ame-content-box>
      <div class="content-box-text left" id="about">
      <span class="section-title">
          Who am I?
      </span>
      <p>
        I'm Lauren DiGiovanni, a software engineer located in Brooklyn, New York.  I'm currently finishing up my last year at NYU, getting my degree in Computer Science.
      </p>
      <p>
        Originally from Long Island, I've never been too far from my home state.  I moved to Manhattan for college, and fell in love with my lifestyle in NYC.  Some of my
        favorite things about New York are all of the incredible cafés, and the ability to explore and always find something new.  I love to take walks in different parts of the city,
        all while drinking a cup of coffee from somewhere new.
      </p>
      <p>

      </p>
    </div>
    <div class="content-box-image">
      <div class="image me-image"/>
    </div>
  </ame-content-box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
</style>