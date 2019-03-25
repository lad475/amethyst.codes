<template>
  <div id="projects">
    <ame-content-box>
      <div class="content-box-text left">
        <span class="section-title">Projects</span>
      </div>
    </ame-content-box>
    <ame-content-box>
      <ame-project-box name="Questify (Name subject to change)"
                      description="An open source framework for building games for WebVR built ontop of AFrame.  Allows
                                    for the user to easily create VR worlds with NPCs that can be interacted with, and will
                                    provide other standard RPG functionality, such as collecting items, an inventory, and 
                                    completing various kinds of quests."
                      technologies="AFrame.js, WebVR, TypeScript"
                      img="questify"
                      link="#"
                      linkTitle="WIP"/>
      <ame-project-box name="PalmTree Website"
                      description="The website for PalmTree, the borrowing service.  Written in Vue.js, it
                                    consumes the PalmTree APIs, and allows the user to borrow items, post items,
                                    sign up, and register as users.  Has form validation, pages generated using slugs,
                                    and pages that require user authentication."
                      technologies="Vue.js, TypeScript, SASS, Axios"
                      img="pt-image"
                      link="https://lad475.github.io/Borrowing-Service-Client/#/"
                      linkTitle="Website (Hosted on GitHub Pages)"/>
      <ame-project-box name="PalmTree APIs"
                      description="The APIs for PalmTree, the borrowing service.  Includes authentication with JWT, 
                                    password encryption using bcrypt, rating users and performing batch MapReduce operations, 
                                    and posting, borrowing, and searching for items in a MySQL database."
                      technologies="Node.js, Express, JWT, MapReduce, bcrypt, MySQL, Google AppEngine"
                      img="pt-logo-backend"
                      link="https://github.com/lad475/Borrowing-Service-APIs"
                      linkTitle="View project on GitHub"/>
      <ame-project-box name="StackIt!"
                      description="A mobile game in which the user must stack the most of the characters in 60 seconds.  It measures
                                    how high the user has stacked the characters, and saves the highest score locally."
                      technologies="Unity, C#, Adobe Photoshop"
                      img="stackit"
                      link="#"
                      linkTitle="Coming soon to iOS and Android!"/>
      <ame-project-box name="MyBuddy"
                      description="A virtual pet that you can raise!  Allows the user to log in with their Google
                                    account and save their process using Google Firebase.  Works in real time, and allows
                                    the user to feed their pet, let it outside, give it medicine if it's sick, and has speech
                                    recognition as well as changing outdoor weather depending on the time of day.  The pet can die and evolve as well."
                      technologies="JavaScript, p5.js, Google Firebase"
                      img="mybuddy"
                      link=""
                      linkTitle="MyBuddy Site (Hosted on GitHub pages)"/>
      <ame-project-box name="FoodFace Industries"
                      description="Website that allows the user to play a dress up like game on fruit, by using custom parts
                                    to make faces on the fruit.  The user can drag and drop the parts onto the fruit, and can click a save button
                                    to save the image to their gallery, and another gallery of all of the images made by all users."
                      technologies="Node.js, Express, Bootstrap, p5.js, MongoDB"
                      img="foodface"
                      link=""
                      linkTitle="View project on GitHub"/>
    </ame-content-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from './content-box.vue';
import ProjectBox from './project-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
    'ame-project-box': ProjectBox,
  },
})
export default class Projects extends Vue {

}
</script>

<style lang="scss" scoped>

.content-box {
  margin: 25px 0;
}

.left {
  max-width: 50%;
}
</style>

