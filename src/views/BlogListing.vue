<template>
  <div id="blogs">
    <ame-content-box>
      <div class="content-box-text blog-box">
        <span class="section-title">My Blog</span>
      </div>
    </ame-content-box>
    <ame-content-box v-for="(blog, index) in dummyBlogs" :key="index">
      <div class="content-box-text left">
        <span>{{ blog.title }}</span>
        <div contenteditable="true"
             v-html="blog.content">
        </div>
      </div>
    </ame-content-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ContentBox from '@/components/content-box.vue';

@Component({
  components: {
    'ame-content-box': ContentBox,
  },
})
export default class BlogListing extends Vue {
  private dummyBlogs: Array<object>;

  constructor() { 
    super();
    this.dummyBlogs = [
      {
        title: 'Number 1',
        content: '<div>hey</div><p>bla bla bla bla bla bla bla bla bla</p>',
        dateWritten: new Date(),
      },
      {
        title: 'Number 2',
        content: '<div>hey</div><p>bla bla bla bla bla bla bla bla bla</p>',
        dateWritten: new Date(),
      },
    ];
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

