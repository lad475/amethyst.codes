<template>
  <div class="content-box">
    <slot></slot>
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

  .college {
    span {
      display: block;
    }
  }

  .grad-cap {
    float: right;

    .fa-graduation-cap {
      height: 100px;
      width: 100px;
    }
  }

  .left {
    border-radius: 0 15px 15px 0;
  }

  .right {
    border-radius: 15px 0 0 15px;
  }

  .content-box-text {
    background-color: rgb(126, 57, 216);
    flex: 1;
    font-size: 18px;
    padding: 10px;

    .section-title {
      font-size: 36px;
      font-weight: bold;
    }
  }

  .content-box-image {
    flex: 1;

    .image {
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      margin: auto;
      width: 50%;
    }

    .me-image {
      background-image: url('../assets/me.png');
    }

    .nyu-image {
      background-image: url('../assets/NYU.jpg');
    }
  }
}
</style>
