<template>
  <div class="content-box">
    <div class="content-box-left">
      <span class="section-title">
          About
      </span>
      <p>
        My name is Lauren.
      </p>
      <p>My name is Lauren. My name is Lauren. My name is Lauren. My name is Lauren.</p>
      <p>My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.My name is Lauren.</p>
    </div>
    <div class="content-box-right">
      <span>hey</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ContentBox extends Vue {

}
</script>

<style lang="scss" scoped>

.content-box {
  color: white;
  display: flex;
  margin: 25px 0;

  .content-box-left {
    background-color: rgb(126, 57, 216);
    border-radius: 0 15px 15px 0;
    flex: 1;
    padding: 10px;
  }

  .content-box-right {
    flex: 1;
  }
}
</style>
