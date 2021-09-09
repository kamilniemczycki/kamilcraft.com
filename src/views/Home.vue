<template>
  <section class="home">
    <About />
    <Experiences />
    <FavoriteProjects />
  </section>
</template>

<script>
import About from '../components/sections/About'
import Experiences from '../components/sections/Experiences'
import FavoriteProjects from '../components/sections/FavoriteProjects'

export default {
  name: 'Home',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      select_projects: []
    }
  },
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
    Experiences,
    FavoriteProjects
  }
}
</script>
