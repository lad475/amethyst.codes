<template>
  <div id="blogs">
    <ame-blog-title/>
    <div v-if="!loading && blogs.length === 0">
      <span>No blogs found</span>
    </div>
    <ame-loader v-if="loading"/>
    <div v-for="(blog, index) in blogs" :key="index">
      <router-link :to="`/blog/${blog.slug}`">
        <ame-content-box>
          <div class="content-box-text left blog-listing">
            <div class="blog-title">{{ blog.title }}</div>
            <span class="date">Posted on {{ blog.timePosted.seconds * 1000 | formatDate }}</span>
          </div>
        </ame-content-box>
      </router-link>
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
    axios.get(`${this.$hostname}/blog/all`)
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
  margin-right: 250px !important;
}

.blog-title {
  color: white;
  font-size: 45px;
  font-family: 'Raleway-Bold';
  text-decoration: none;
  outline: none;
}

a {
  text-decoration: none;
}

.content-box-text {
  &:hover {
    background-color: purple;
  }
}

</style>

