<template>
  <div id="content" class="content">
    <ame-about/>
    <ame-education/>
    <ame-skills/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';
import About from './about.vue';
import Education from './education.vue';
import Skills from './skills.vue';

@Component({
  components: {
    'ame-about': About,
    'ame-education': Education,
    'ame-skills': Skills,
  },
})
export default class Content extends Vue {

}
</script>

<style lang="scss" scoped>


</style>

