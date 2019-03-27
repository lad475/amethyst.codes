<template>
  <ame-content/>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Content from '../components/content.vue';

@Component({
  components: {
    'ame-content': Content,
  },
})
export default class Home extends Vue {}
</script>
