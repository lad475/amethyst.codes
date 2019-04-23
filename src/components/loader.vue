<template>
  <div class="cover">
    <div class="loading-text">
      Loading the good stuff...
    </div>
    <div class="lds-heart">
      <div/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {}
</script>

<style lang="scss" scoped>
.cover {
  opacity: .8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 5000;
}

.loading-text {
  position: relative;
  text-align: center;
  top: 65vh;
  font-size: 18px;
}

.lds-heart {
  margin: 20vh auto;
  display: block;
  position: relative;
  width: 170px;
  height: 170px;
  transform: rotate(45deg);
  transform-origin: 85px 85px;
}
.lds-heart div {
  top: 56px;
  left: 60px;
  position: absolute;
  width: 104px;
  height: 104px;
  background: pink;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 104px;
  height: 104px;
  background: pink;
}
.lds-heart div:before {
  left: -60px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -60px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>


