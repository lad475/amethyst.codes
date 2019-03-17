<template>
  <div id="app">
    <ame-header/>
    <div id="content" class="content">
      <router-view/>
    </div>
    <ame-footer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

@Component({
  components: {
    'ame-header': Header,
    'ame-footer': Footer,
  },
})
export default class App extends Vue {

}
</script>


<style lang="scss">
@import '~/node_modules/@fontawesome/fontawesome-free/css/all.css';

@font-face {
  font-family: 'Raleway';
  src: url('./assets/fonts/Raleway-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Raleway-Bold';
  src: url('./assets/fonts/Raleway-ExtraBold.ttf') format('truetype');
}

body {
  font-family: 'Raleway', sans-serif;
  margin: 0;
}

body, html {
  height: 100%;
}

#app {
  height: 100%;
}

.content {
  padding-bottom: 100px;
}

h1 {
  font-family: 'Raleway-Bold', sans-serif;
}
</style>
