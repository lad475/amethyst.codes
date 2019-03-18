<template>
  <ame-content-box>
    <div class="content-box-image" id="education">
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
        <p>
          <span>New York University</span>
          <span>BA in Computer Science</span>
          <span>Minor in Web Programming</span>
          <span>GPA: 3.75</span>
          <span>Expected May 2019</span>
        </p>
      </div>
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
export default class Education extends Vue {}
</script>

<style lang="scss" scoped>

.college {
  span {
    display: block;
  }
}

.grad-cap {
  float: right;
  text-align: center;
  margin-top: 30px;

  .fa-graduation-cap {
    height: 50%;
    width: 50%;
  }
}

</style>
