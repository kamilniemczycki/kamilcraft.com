<template>
  <div class="home">
    <HelloWorld/>
    <About/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HomePageElement.vue'
import About from '@/components/sections/About.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    About
  }
}
</script>
