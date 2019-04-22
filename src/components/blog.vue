<template>
  <div id="blog">
    <div class="blog-content">
      <span class="title">{{ data.title }}</span>
      <div v-html="data.content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Blog extends Vue {
  @Prop() data?: any;
}
</script>

<style lang="scss" scoped>

.title {
  display: block;
  font-size: 32px;
}

.blog-content {
  box-sizing: border-box;
  background-color: rgb(126, 57, 216);
  box-shadow: 0 20px rgb(88, 9, 153);
  border-radius: 15px;
  color: white;
  font-size: 18px;
  margin: 10px 40px 50px;
  padding: 15px 30px;
}
</style>


