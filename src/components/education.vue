<template>
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