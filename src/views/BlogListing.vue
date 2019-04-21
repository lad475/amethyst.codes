<template>
  <div id="blogs">
    <ame-content-box>
      <div class="content-box-text blog-box">
        <span class="section-title">My Blog</span>
      </div>
    </ame-content-box>
    <div v-if="blogs.length === 0">
      <span>Hello</span>
    </div>
    <div v-if="blogs.length > 0">
      <ame-content-box v-for="(blog, index) in blogs" :key="index">
        <div class="content-box-text left">
          <span>{{ blog.title }}</span>
          <div contenteditable="true"
              v-html="blog.content">
          </div>
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
  private blogs = [];

  constructor() { 
    super();
  }

  created() {
    axios.get('http://localhost:3000/blog/all')
      .then(res => {
        this.blogs = res.data.blogs;
      })
      .catch(err => {

      })
      .finally(() => {

      });
  }
}
  
</script>

<style lang="scss" scoped>

.blog-box {
  border-radius: 15px;
  box-shadow: -12px 12px rgb(88, 9, 153);
}

#blogs {
  position: relative;
  left: -100px;
  min-width: 100vw;
}

</style>

