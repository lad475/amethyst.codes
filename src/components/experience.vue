<template>
  <ame-content-box>
    <div class="content-box-text" id="experience">
      <span class="section-title">Experience</span>
      <hr>
      <div class="ww">
        <span class="sub-section-title">
          WW (formerly WeightWatchers)
        </span>
        <div class="exp-description">
          <div class="">Full Stack Engineering Intern</div>
          <div class="">May 2018 - Present</div>
          <div class="exp-img ww"></div>
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
      <div class="nyu">
        <span class="sub-section-title">
          New York University
        </span>
        <div class="exp-description">
          <div class="">Student Tutor and Grader</div>
          <div class="">January 2017 - Present</div>
          <div class="exp-img nyu"/>
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
export default class Experience extends Vue {

}
</script>

<style lang="scss" scoped>

</style>


