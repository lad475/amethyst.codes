<template>
  <div id="header">
    <span class="title">amethyst.codes</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>

.title {
  font-size: 80px;
  display: inline-block;
  overflow: hidden;
  border-right: .05em solid purple;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .05em;
  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0% }
  to { width: 100% }
}

@-webkit-keyframes typing {
  from { width: 0% }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: purple; }
}
</style>

