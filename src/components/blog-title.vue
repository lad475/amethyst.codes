<template>
  <div class="blog-box">
    <div class="amethyst"/>
    <div class="amethyst right-amethyst"/>
    <span class="section-title">Lauren's Dazzling Blog</span>
    <span class="subtitle">Check out what I'm up to, be it what I'm coding or just how life is going.</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BlogTitle extends Vue {}
</script>


<style lang="scss" scoped>
.blog-box {
  box-sizing: border-box;
  display: block;
  font-family: 'Raleway-Bold';
  margin: auto;
  text-align: center;
  color: black;
  min-width: 100%;
  padding: 25px 10%;
}

.amethyst {
  width: 75px;
  height: 75px;
  margin: auto;
  background-image: url('../assets/amethyst-left.png');
  background-repeat: no-repeat;
  background-size: contain;
  float: left;

  &.right-amethyst {
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    float: right;
  }
}

.section-title {
  font-size: 42px;
}

.subtitle {
  color: purple;
  text-align: center;
  display: block;
}
</style>
