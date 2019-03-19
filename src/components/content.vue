<template>
  <div id="content" class="content">
    <ame-about/>
    <ame-education/>
    <ame-skills/>
    <ame-exp/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';
import About from './about.vue';
import Education from './education.vue';
import Skills from './skills.vue';
import Experience from './experience.vue';

@Component({
  components: {
    'ame-about': About,
    'ame-education': Education,
    'ame-skills': Skills,
    'ame-exp': Experience,
  },
})
export default class Content extends Vue {

}
</script>

<style lang="scss" scoped>


</style>

