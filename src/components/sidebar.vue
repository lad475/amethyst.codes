<template>
  <div id="sidebar">
    <div class="amethyst"></div>
    <div class="navigation bold">
      <a>About</a>
      <a>Education</a>
      <a>Skills</a>
      <a>Experience</a>
      <a>Projects</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {

}
</script>

<style lang="scss" scoped>

#sidebar {
  height: 100%;
  width: 100px;
  background-color: #d9a8f5;
  position: fixed;
  top: 0;
}

.amethyst {
  background-image: url('../assets/Amethyst.png');
  background-size: contain;
  position: fixed;
  top: 15px;
  left: 12px;
  width: 75px;
  height: 75px;
}

.navigation {

  margin-top: 150px;
  a {
    color: white;
    display: block;
    font-weight: bold;
    margin: 25px auto;
    text-align: center;

    &:hover {
      color: rgb(216, 124, 208);
      cursor: pointer;
    }
  }
}
</style>

