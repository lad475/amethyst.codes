<template>
  <div id="experience">
  <ame-content-box>
    <div class="content-box-text left">
      <span class="section-title">Experience</span>
    </div>
  </ame-content-box>
  <ame-content-box>
    <div class="ww content-box-text">
      <span class="sub-section-title">
        WW (formerly WeightWatchers)
      </span>
      <div class="exp-description">
        <div class="exp-img ww"></div>
        <div class="position">Full Stack Engineering Intern</div>
        <div class="date">May 2018 - Present</div>
        <div class="bullets">
          <ul>
            <li>Utilized front-end frameworks such as Angular 2-7, AngularJS and React to write reactive web-apps related to signup and user retention</li>
            <li>Set up the Jest testing framework on a very large multi-application Angular 7 project, and generated combined coverage reports.  Upped front-end testing coverage by 25% after initial setup.</li>
            <li>Rewrote a legacy app written in AngularJS to Angular 7, with additions and upgrades.</li>
            <li>Wrote and revised NodeJS endpoints related to signing up and enrolling users, and added security upgrades.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nyu content-box-text">
      <span class="sub-section-title">
          New York University
        </span>
        <div class="exp-description">
          <div class="exp-img nyu"/>
          <div class="position">Student Tutor and Grader</div>
          <div class="date">January 2017 - Present</div>
          <div class="bullets">
            <ul>
              <li>Worked as a department tutor for CSCI 102 Data Structures for four semesters</li>
              <li>Graded for various Computer Science courses at NYU, including Interactive Computing, Open Source Software Development, Introdution to Computer Science, and Web Development</li>
              <li>Using the Java language, assisted students with homework assignments as well as with course material for Data Structures</li>
              <li>Graded courses taught in JavaScript and Python, and worked closely with professors to leave the best constructive feedback possible</li>
            </ul>
          </div>
        </div>
      </div>
    </ame-content-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class Experience extends Vue {

}
</script>

<style lang="scss" scoped>

li {
  margin: 15px;
}

.position {
  font-size: 20px;
}

.date {
  font-size: 20px;
}

.content-box {
  margin: 25px 0;
}

.exp-description {
  text-align: center;
}

.bullets {
  text-align: left;
}

.sub-section-title {
  display: block;
  font-size: 28px;
  text-align: center;
}

.exp-img {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  margin:  15px auto;

  &.ww {
    background-image: url('../assets/WW.png');
  }

  &.nyu {
    background-image: url('../assets/NYU.jpg');
  }
}

.content-box-text.nyu, .content-box-text.ww {
  border-radius: 15px;
  box-shadow: 12px 12px rgb(88, 9, 153);
  box-sizing: border-box;
  margin: 25px;
  min-width: 400px;

  @media only screen and (max-width: 560px) {
    min-width: 100%;
    margin: 25px 0;
  }
}

.content-box-text.left {
  max-width: 50%;
}


</style>


