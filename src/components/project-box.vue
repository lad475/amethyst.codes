<template>
    <div class="project-box content-box-text">
      <span class="sub-section-title">
        {{ name }}
      </span>
      <div class="proj-img" :class="img"/>
      <a class="proj-link" :href="link ? link : 'javascript:;'" target="_blank">{{ linkTitle }}</a>
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
  font-size: 28px;
  display: block;
  text-align: center;
  margin-bottom: 25px;
}

.project-box {

  min-width: 250px;
  margin: 25px;
  border-radius: 15px;
  &.content-box-text { box-shadow: 12px 12px rgb(88, 9, 153); }


  .proj-img {
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin: 20px auto;
  }

  .questify {
    background-image: url('../assets/questify-2.png');
  }

  .pt-image {
    background-image: url('../assets/pt-logo.png');
  }

  .pt-logo-backend {
    background-image: url('../assets/pt-logo-backend.png');
  }

  .stackit {
    background-image: url('../assets/stackit.png');
  }

  .mybuddy {
    background-image: url('../assets/mybuddy-2.png');
  }
  
  .foodface {
    background-image: url('../assets/ff.png');
  }
  
  .proj-link {
    display: block;
    color: rgb(255, 173, 228);
    text-decoration: none;
    font-family: 'Raleway-Bold';
    font-size: 20px;
    margin: 15px 0;
    text-align: center;

    &:hover {
      color: rgb(173, 163, 255);
      text-decoration: underline;
    }
  }

  .technologies {
    display: block;
    margin-top: 15px;
    font-family: 'Raleway-Bold';
  }
}
</style>
