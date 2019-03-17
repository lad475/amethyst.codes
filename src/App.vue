<template>
  <div>
    <div id="app">
      <ame-header/>
      <ame-sidebar/>
      <ame-content/>
      <ame-footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import SideBar from '@/components/sidebar.vue';
import Content from '@/components/content.vue';

@Component({
  components: {
    'ame-header': Header,
    'ame-footer': Footer,
    'ame-sidebar': SideBar,
    'ame-content': Content,
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
  min-height: 100vh;
  position: relative;
}

#app {
  min-height: 100%;
}

.content {
  padding-bottom: 100px;
  margin-left: 100px;
}

h1 {
  font-family: 'Raleway-Bold', sans-serif;
}
</style>
