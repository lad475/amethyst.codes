<template>
  <div id="header">
    <div class="mobile-amethyst"/>
    <span :class="'title ' + (useMainPageStyles ? 'with-sidebar' : '')">amethyst.codes</span>
    <div :class="'description ' + (useMainPageStyles ? 'with-sidebar' : '')">
      <span>Just your average programmer with a passion for coffee and the color purple</span>
      <router-link class="nav-link" to='/blog'>Blog</router-link>
      <router-link class="nav-link" to='/'>Home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private useMainPageStyles = true;

  created() {
    this.checkRoute();
  }

  @Watch('$route')
  checkRoute() {
    if (this.$route.name !== 'home') {
      this.useMainPageStyles = false;
    }
  }
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
  padding: 5px 5px 5px 25px;
  color: white;

  span {
    @media only screen and (max-width: 760px) {
      display: block;
    }
  }

  .nav-link {
    color: white;
    font-family: 'Raleway-Bold';
    margin-right: 35px;
    float: right;

    &:hover {
      color: rgb(216, 124, 208);
    }

    @media only screen and (max-width: 760px) {
      float: none;
      display: inline-block;
      text-align: center;
      width: 50%;
      margin: auto;
    }
  }

  &.with-sidebar {
    padding: 5px 5px 5px 105px;
  }

  @media only screen and (max-width: 560px) {
    padding-left: 5px !important;
    font-size: 14px;
  }
}

.title {
  font-size: 80px;
  display: inline-block;
  overflow: hidden;
  border-right: .05em solid purple;
  white-space: nowrap;
  margin-left: 25px;
  letter-spacing: .05em;

  &.with-sidebar {
    margin-left: 125px;
  }

  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;

  @media only screen and (max-width: 770px) {
    font-size: 50px;
    animation: typingTablet 3s steps(40, end), blink-caret .75s step-end infinite;
  }

  @media only screen and (max-width: 560px) {
    font-size: 30px;
    margin-left: 5px !important;
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

@keyframes typingTablet {
  from { width: 0 }
  to { width: 400px }
}

@-webkit-keyframes typingTablet {
  from { width: 0 }
  to { width: 400px }
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

