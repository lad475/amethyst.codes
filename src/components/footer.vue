<template>
  <div id="footer" class="footer-container">
    <div class="footer-content">
      <div class="icon-container">
        <a href="https://www.github.com/lad475" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://twitter.com/amethystx87" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/amethystx87/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/lauren-digiovanni-4b9601119/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:sample@example.com?Subject=Not%20Implemented" target="_top"><i class="fas fa-envelope-square"></i></a>
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
  background-color: purple;
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
  position: relative;
  top: 5px;
  width: 18px;
  height: 18px;
}

.heart {
  background-image: url('../assets/heart.png');
  margin: 0 5px;
  background-size: cover;
  display: inline-block;
  position: relative;
  top: 5px;
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
