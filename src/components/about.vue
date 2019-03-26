<template>
  <ame-content-box>
      <div class="content-box-text left" id="about">
      <span class="section-title">
          Who am I?
      </span>
      <hr/>
      <p>
        My name's Lauren DiGiovanni, and I'm a software engineer located in Brooklyn, New York.  I'm currently finishing up my last year at NYU, earning my degree in Computer Science.  I currently specialize in full-stack web development, and have had a blast
        watching the ways in which JavaScript has been evolving and changing over the last few years.  It's a great time to be a young programmer!
      </p>
      <p>
        Aside from coding, I love to learn new things and am interested in a wide variety of subjects- I'm a classically trained double bassist of over 10 years, I love to paint, and I really adore cooking and learning new recipes.
        I'm always collecting things that I find interesting, especially fun gadgets, with one of my favorite trinkets to collect being Tamagotchi, the virtual pets that took the world by storm in the '90s.
      </p>
      <p>
        I love to spend my free time finding new cafés and reading books over a cortado: my favorite book is The Bell Jar by Sylvia Plath.  I actively enjoy writing as well as reading, and spent one summer abroad in Paris studying creative writing.
        Someday I dream of publishing a novel.
      </p>
    </div>
    <div class="content-box-image">
      <div class="image me-image"/>
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
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
</style>