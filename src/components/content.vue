<template>
  <div id="content" class="content">
    <ame-content-box/>
    <ame-content-box/>
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

