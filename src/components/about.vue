<template>
  <ame-content-box>
      <div class="content-box-text left" id="about">
      <span class="section-title">
          Who am I?
      </span>
      <hr/>
      <p>
        My name is Lauren DiGiovanni, and I'm a software engineer located in Brooklyn, New York.  
        I graduated from New York University in May of 2019, earning my Bachelor's in Computer Science.  Currently, I specialize in full-stack web development, and have had a blast
        watching the ways in which JavaScript has been evolving and changing over the last few years.  It's a great time to be a young programmer!
      </p>
      <p>
        Aside from coding, I love to learn new things and am interested in a wide variety of subjects- I'm a classically trained double bassist of over 10 years, I love to paint, and I really enjoy cooking and learning new recipes.
        I'm always collecting things that I find interesting, especially fun gadgets, with one of my favorite trinkets to collect being Tamagotchi, the virtual pets that took the world by storm in the '90s.
      </p>
      <p>
        I love to spend my free time finding new cafés and reading books over a cortado: my favorite book is The Bell Jar by Sylvia Plath.  I actively enjoy writing as well as reading, and spent one summer abroad in Paris studying creative writing.
        Someday I dream of publishing a novel.
      </p>
      <p>
        I also have an <a href="https://www.instagram.com/biteofmybento/?hl=en">Instagram account</a> where I post pictures of bento boxes that I make for lunch at work every day.  It's a huge outlet for my creativity, plus I love Japanese food!
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

@media only screen and (max-width: 770px) {
  .content-box-text {
    font-size: 14px;
    min-width: 100% !important;
    box-shadow: 0 20px rgb(88, 9, 153) !important;
    border-radius: 0 !important;
  }
}

</style>