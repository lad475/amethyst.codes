<template>
    <div class="project-box content-box-text">
      <span class="sub-section-title">
        {{ name }}
      </span>
      <div class="proj-img" :class="img"/>
      <a class="proj-link" :href="link">{{ linkTitle }}</a>
      <span class="project-description">
        {{ description }}
      </span>
      <div class="technologies">
        {{ technologies }}
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ContentBox from '@/components/content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class ProjectBox extends Vue {
  @Prop() private name?: string;
  @Prop() private img?: string;
  @Prop() private description?: string;
  @Prop() private technologies?: string;
  @Prop() private link?: string;
  @Prop() private linkTitle?: string;
}
</script>

<style lang="scss" scoped>

.sub-section-title {
  font-family: 'Raleway-Bold';
  font-size: 28px;
  display: block;
  text-align: center;
  margin-bottom: 25px;
}

.project-box {

  min-width: 250px;
  margin: 25px;
  border-radius: 15px;

  &:hover {
    background-color: purple;
  }

  .proj-img {
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin: 20px auto;
  }

  .questify {
    background-image: url('../assets/NYU.jpg');
  }

  .pt-image {
    background-image: url('../assets/NYU.jpg');
  }

  .pt-logo-backend {
    background-image: url('../assets/NYU.jpg');
  }

  .stackit {
    background-image: url('../assets/NYU.jpg');
  }

  .mybuddy {
    background-image: url('../assets/NYU.jpg');
  }
  
  .foodface {
    background-image: url('../assets/NYU.jpg');
  }
  
  .proj-link {
    display: block;
    color: rgb(216, 124, 208);
    text-decoration: none;
    font-size: 20px;
  }

  .technologies {
    display: block;
    margin-top: 15px;
    font-family: 'Raleway-Bold';
  }
}
</style>
