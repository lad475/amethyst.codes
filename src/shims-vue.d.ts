
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $hostname: string
  }
}
