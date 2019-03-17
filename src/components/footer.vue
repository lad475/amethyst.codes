<template>
  <div id="footer" class="footer-container">
    <div class="footer-content">
      <div class="icon-container">
        <a href="https://www.github.com/lad475" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://twitter.com/amethystx87" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <div class="disclaimer">
        Made with <div class="vue-logo"></div> and <div class="heart"></div> by Lauren DiGiovanni
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>

.footer-container {
  background-color: rgb(126, 57, 216);
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.vue-logo {
  background-image: url('../assets/logo.png');
  background-size: cover;
  display: inline-block;
  margin: 0 5px;
  width: 18px;
  height: 18px;
}

.heart {
  background-image: url('../assets/heart.png');
  margin: 0 5px;
  background-size: cover;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.svg-inline--fa {
  color: white;
  height: 50px;
  margin: 0 5px;
  width: 50px;

  &:hover {
    color: rgb(216, 124, 208);
  }
}

.icon-container {
  float: left;
  text-align: center;
  width: 50%;
}

.disclaimer {
  color: white;
  font-size: 18px;
  display: inline-block;
  margin-top: 15px;
  text-align: center;
  width: 50%;
}

.footer-content {
  padding: 25px 25px 25px 75px;
}

</style>
