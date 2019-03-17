<template>
  <div id="footer" class="footer-container">
    <div class="footer-content">
      <div class="icon-container">
        <i class="fab fa-github-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <div class="disclaimer">
        Made with love and amethysts
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

.svg-inline--fa {
  color: white;
  height: 50px;
  width: 50px;

  &:hover {
    color: rgb(216, 124, 208);
  }
}

.icon-container {
  display: inline-block;
  text-align: center;
  width: 50%;
}

.disclaimer {
  display: inline-block;
  text-align: center;
  width: 50%;
}

.footer-content {
  padding: 25px 25px 25px 75px;
}

</style>
