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

.sub-section-title {
  font-size: 25px;
}

.content-box {
  color: white;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;

  .college {
    span {
      display: block;
    }
  }

  .grad-cap {
    float: right;
    text-align: center;

    .fa-graduation-cap {
      height: 50%;
      width: 50%;
    }
  }

  .left {
    border-radius: 0 15px 15px 0;
    box-shadow: 5px 10px purple;
  }

  .right {
    border-radius: 15px 0 0 15px;
    box-shadow: -5px 5px 20px #777;
  }

  .content-box-text {
    background-color: rgb(126, 57, 216);
    box-shadow: 0 20px rgb(88, 9, 153);
    flex: 2;
    font-size: 18px;
    padding: 20px;

    &.right {
      box-shadow: -12px 12px rgb(88, 9, 153);
    }

    &.left {
      box-shadow: 12px 12px rgb(88, 9, 153);
    }

    .section-title {
      font-size: 36px;
      font-weight: bold;
    }
  }

  .content-box-image {
    flex: 1;
    box-sizing: border-box;
    padding: 10px;

    .image {
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: 100%;
      margin: auto;
      width: 100%;
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
