<template>
  <div id="blogs">
    <ame-blog-title/>
    <div v-if="!loading && blogs.length === 0">
      <span>No blogs found</span>
    </div>
    <ame-loader v-if="loading"/>
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
import BlogTitle from '@/components/blog-title.vue';
import Loader from '@/components/loader.vue';
import axios from 'axios';

@Component({
  components: {
    'ame-content-box': ContentBox,
    'ame-blog-title': BlogTitle,
    'ame-loader': Loader,
  },
})
export default class BlogListing extends Vue {
  private blogs: any = [];
  private loading = true;

  constructor() { 
    super();
  }

  created() {
    this.loading = true;
    axios.get('http://localhost:3000/blog/all')
      .then(res => {
        this.blogs = res.data.blogs;
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

.blog-listing {
  margin-right: 100px !important;
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

