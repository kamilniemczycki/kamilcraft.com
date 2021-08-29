<template>
  <section class="home">
    <About />
    <Experiences />
  </section>
</template>

<style lang="scss">

</style>

<script>
import About from '../components/sections/About'
import Experiences from '../components/sections/Experiences'

export default {
  name: 'Home',
  mounted () {
    const header = {
      title: this.$route.meta.title,
      description: [
        'Chciałbym Państwa powitać na mojej stronie!',
        'Przedstawiam tutaj część swojego życia związaną z programowaniem i projektowaniem aplikacji internetowych.'
      ]
    }
    this.$store.commit('setHeader', header)
  },
  destroyed () {
    this.$store.commit('resetHeaderTitle')
    this.$store.commit('resetHeaderDescription')
  },
  components: {
    About,
    Experiences
  }
}
</script>
