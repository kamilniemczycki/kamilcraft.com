<template>
  <section class="home">
    <About />
    <Experiences />
  </section>
</template>

<script>
import About from '../components/sections/About'
import Experiences from '../components/sections/Experiences'

export default {
  name: 'Home',
  components: {
    About,
    Experiences
  }
}
</script>
