<template>
  <div id="blogs">
    <ame-content-box>
      <div class="blog-box">
        <div class="amethyst"/>
        <div class="amethyst right-amethyst"/>
        <span class="section-title">Lauren's Dazzling Blog</span>
        <span class="subtitle">Check out what I'm up to, be it what I'm coding or just how life is going.</span>
      </div>
    </ame-content-box>
    <div v-if="loading">
      <div class="lds-heart">
        <div></div>
      </div>
    </div>
    <div v-if="!loading">
      <div v-if="blog">
        <ame-blog :data="blog"/>
      </div>
      <div v-if="!blog">
        No blogs could be found here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import ContentBox from '@/components/content-box.vue';
import Blog from '@/components/blog.vue';
import axios from 'axios';

@Component({
  components: {
    'ame-blog': Blog,
  },
})
export default class BlogEntry extends Vue {
  private blog: any;
  private loading = true;

  constructor() { 
    super();
  }

  created() {
    this.getBlog();
  }

  @Watch('$route')
  getBlog() {
    this.loading = true;
    axios.get(`http://localhost:3000/blog/${this.$route.params.slug}`)
      .then(res => {
        this.blog = res.data.blog;
      })
      .catch(err => {

      })
      .finally(() => {
        this.loading = false;
      });
  }
}
  
</script>

<style lang="scss" scoped>

.blog-box {
  box-sizing: border-box;
  display: block;
  font-family: 'Raleway-Bold';
  margin: auto;
  text-align: center;
  color: black;
  min-width: 100%;
  padding: 25px 10%;
}

.amethyst {
  width: 75px;
  height: 75px;
  margin: auto;
  background-image: url('../assets/amethyst-left.png');
  background-repeat: no-repeat;
  background-size: contain;
  float: left;

  &.right-amethyst {
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    float: right;
  }
}

.section-title {
  font-size: 42px;
}

.subtitle {
  color: purple;
  text-align: center;
  display: block;
}

#blogs {
  position: relative;
  left: -100px;
  min-width: 100vw;
}

.lds-heart {
  display: block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;
}
.lds-heart div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: pink;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: pink;
}
.lds-heart div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
