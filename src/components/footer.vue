<template>
  <div id="footer" class="footer-container">
    <div class="footer-content">
      <div class="icon-container">
        <a href="https://www.github.com/lad475" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://twitter.com/amethystx87" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/amethystx87/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/lauren-digiovanni-4b9601119/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:admin@amethyst.codes?Subject=Reaching%20out!" target="_top"><i class="fas fa-envelope-square"></i></a>
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

  @media only screen and (max-width: 560px) {
    height: auto;
  }
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

  @media (max-width: 560px) {
    height: 13px;
    width: 13px;
    margin: 0 2.5px;
    top: 0;
  }
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

  @media (max-width: 560px) {
    height: 15px;
    width: 15px;
    margin: 0 2.5px;
    top: 0;
  }
}

.svg-inline--fa {
  color: white;
  height: 50px;
  margin: 0 5px;
  width: 50px;

  &:hover {
    color: rgb(216, 124, 208);
  }

  @media (max-width: 560px) {
    height: 30px;
    width: 30px;
  }
}

.icon-container {
  float: left;
  width: 50%;

  @media only screen and (max-width: 560px) {
    width: 100%;
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }
}

.disclaimer {
  color: white;
  font-size: 18px;
  display: inline-block;
  margin-top: 15px;
  text-align: center;
  width: 50%;

  @media (max-width: 855px) {
    margin: 0;
  }

  @media (max-width: 560px) {
    font-size: 14px;
    width: 100%;
  }
}

.footer-content {
  padding: 25px 25px 25px 75px;

  @media (max-width: 560px) {
    padding: 25px;
  }
}

</style>
