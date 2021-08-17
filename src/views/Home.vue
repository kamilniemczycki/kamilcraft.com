<template>
  <div class="home">
    <About />
    <Experiences />
  </div>
</template>

<script>
import About from '@/components/sections/About.vue'
import Experiences from '@/components/sections/Experiences.vue'

export default {
  name: 'Home',
  components: {
    About,
    Experiences
  }
}
</script>
