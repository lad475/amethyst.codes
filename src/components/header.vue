<template>
  <div id="header">
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

.description {
  box-sizing: border-box;
  background-color: purple;
  width: 100%;
  padding: 5px 5px 5px 105px;
  color: white;
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
}

@keyframes typing {
  from { width: 0 }
  to { width: 650px }
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

