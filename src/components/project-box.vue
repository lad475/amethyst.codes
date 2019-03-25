<template>
  <div class="project-box">
    <span class="sub-section-title">
      {{ name }}
    </span>
    <span class="project-description">
      {{ description }}
    </span>
    <span class="technologies">
      {{ technologies }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProjectBox extends Vue {
  @Prop() name?: string;
  @Prop() description?: string;
  @Prop() technologies?: string;
}
</script>

<style lang="scss" scoped>

</style>
