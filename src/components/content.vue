<template>
  <div id="content" class="content">
    <ame-content-box>
      <div class="content-box-text left">
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
    <ame-content-box>
      <div class="content-box-image">
        <div class="nyu-image image"/>
      </div>
      <div class="content-box-text right">
        <span class="section-title">
          Education
        </span>
        <div class="grad-cap">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="college">
          <span>New York University</span>
          <span>BA in Computer Science</span>
          <span>Minor in Web Programming</span>
          <span>GPA: 3.75</span>
          <span>Expected May 2019</span>
        </div>
      </div>
    </ame-content-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class Content extends Vue {

}
</script>

<style lang="scss" scoped>

</style>

