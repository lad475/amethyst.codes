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
    <div v-if="blogs.length === 0">
      <span>No blogs found</span>
    </div>
    <div v-if="blogs.length > 0">
      <ame-content-box v-for="(blog, index) in blogs" :key="index">
        <div class="content-box-text left blog-listing">
          <span>{{ blog.title }}</span>
          <div v-html="blog.content"/>
        </div>
      </ame-content-box>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from '@/components/content-box.vue';
import axios from 'axios';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class BlogListing extends Vue {
  private blogs: any = [];

  constructor() { 
    super();
  }

  created() {
    // axios.get('http://localhost:3000/blog/all')
    //   .then(res => {
    //     this.blogs = res.data.blogs;
    //   })
    //   .catch(err => {

    //   })
    //   .finally(() => {

    //   });
    this.blogs.push(
      {
        title: 'Hello Blog',
        content: '<a href=#>Heyo</a>'
      },
      {
        title: 'Hello to you too',
        content: '<p>omg</p>'
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
  padding: 0 10%;
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

.blog-listing {
  margin-right: 100px !important;
}

#blogs {
  position: relative;
  left: -100px;
  min-width: 100vw;
}

</style>

