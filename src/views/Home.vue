<template>
  <div class="home">
    <img alt="KamilCraft.com logo" :src="`${publicPath}assets/logo.png`">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HomePageElement.vue'

export default {
  name: 'Home',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    HelloWorld
  }
}
</script>
