<template>
  <ame-content-box>
    <div class="content-box-text" id="skills">
      <span class="section-title">Skills</span>
      <hr>
      <div class="lists">
        <div class="languages">
          <span class="sub-section-title">Languages</span>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>HTML/CSS + SASS</li>
            <li>Lua</li>
            <li>Java</li>
            <li>C#</li>
          </ul>
        </div>
        <div class="web-tech">
          <span class="sub-section-title">Web Technologies</span>
          <ul>
            <li>React.js</li>
            <li>Angular 2+</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB + Mongoose</li>
          </ul>
        </div>
        <div class="other">
          <span class="sub-section-title">Other</span>
          <ul>
            <li>Jest</li>
            <li>Jasmine/Mocha/Chai</li>
            <li>Docker</li>
            <li>Git</li>
            <li>Bash</li>
            <li>Adobe Photoshop + Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  </ame-content-box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class Skills extends Vue {}
</script>

<style lang="scss" scoped>

ul {
  text-align: left;
}

.lists {
  display: flex;
  flex-wrap: wrap;
}

.content-box-text {
  text-align: center;
}

.languages, .web-tech, .other {
  flex: 1;
  min-width: 240px;
}

</style>