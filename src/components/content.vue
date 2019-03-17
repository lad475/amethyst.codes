<template>
  <div id="content" class="content">
    <ame-about/>
    <ame-education/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';
import About from './about.vue';
import Education from './education.vue';

@Component({
  components: {
    'ame-about': About,
    'ame-education': Education,
  },
})
export default class Content extends Vue {

}
</script>

<style lang="scss" scoped>

</style>

