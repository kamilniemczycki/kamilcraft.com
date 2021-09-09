<template>
  <section id="about">
    <div class="container">
      <h2>Studia</h2>
      <p>
        Nazywam się Kamil Niemczycki, jestem absolwentem Państwowej Wyższej Szkoły Zawodowej im. Witelona w Legnicy.
        Studiowałem na kierunku <em>Informatyka</em> o specjalności <em>Programowanie Aplikacji Mobilnych i
        Internetowych.</em>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
section#about {
  padding: 20px 0;
  background-color: #fafafa !important;
}
</style>

<script>
export default {
  name: 'About',
  data () {
    return {}
  },
  mounted () {
    const header = {
      title: this.$route.meta.title,
      description: 'I\'m a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog.'
    }
    this.$store.commit('setHeader', header)
  },
  destroyed () {
    this.$store.commit('resetHeaderTitle')
    this.$store.commit('resetHeaderDescription')
  }
}
</script>
