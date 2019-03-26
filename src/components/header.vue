<template>
  <div id="header">
    <div class="mobile-amethyst"/>
    <span class="title">amethyst.codes</span>
    <div class="description">Just your average programmer with a passion for coffee and the color purple</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>

.mobile-amethyst {
  display: none;

  @media only screen and (max-width: 560px) {
    display: inline-block;
    background-image: url('../assets/amethyst-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 40px;
    height: 40px;
  }
}

.description {
  box-sizing: border-box;
  background-color: purple;
  width: 100%;
  padding: 5px 5px 5px 105px;
  color: white;

  @media only screen and (max-width: 560px) {
    padding-left: 5px;
    font-size: 14px;
  }
}

.title {
  font-size: 80px;
  display: inline-block;
  overflow: hidden;
  border-right: .05em solid purple;
  white-space: nowrap;
  margin-left: 125px;
  letter-spacing: .05em;
  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;

  @media only screen and (max-width: 560px) {
    font-size: 30px;
    margin-left: 5px;
    animation: typingMobile 3s steps(40, end), blink-caret .75s step-end infinite;
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 650px }
}

@keyframes typingMobile {
  from { width: 0 }
  to { width: 245px }
}

@-webkit-keyframes typingMobile {
  from { width: 0 }
  to { width: 245px }
}

@-webkit-keyframes typing {
  from { width: 0 }
  to { width: 650px }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: purple; }
}
</style>

