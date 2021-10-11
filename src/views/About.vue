<template>
  <section id="about">
    <div class="container">
      <p>
        <strong>Nazywam się Kamil Niemczycki. Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.
          W projektach wykorzystuję techologie oparte o PHP i JavaScript, tworząc skomplikowane i skalowalne aplikacje internetowe.</strong>
      </p>
      <h2>Studia</h2>
      <p>
        Jestem absolwentem Państwowej Wyższej Szkoły Zawodowej im. Witelona w Legnicy. Studiowałem na kierunku <em>Informatyka</em> o specjalności <em>Programowanie Aplikacji Mobilnych i Internetowych.</em>
      </p>
      <p>
        Podczas studiów zdobyłem niezbędną wiedzę z zakresu projektowania, wdrażania i rozwoju aplikacji internetowych, mobilnych i desktopowych.
        Zdobyłem także umiejętności pracy w zespole, które owocują tworzeniem merytorycznej dyskusji na temat części lub całości projektu.
      </p>
      <h3>Kursy</h3>
      <p>W ramach studiów uzyskałem zaświadczenie dotyczące ukończenia kursu:
        <a :href="publicPath + 'download/certyfikat-laravel.pdf'"><strong>Architektura aplikacji internetowych opartych o framework Laravel</strong></a>.</p>
      <p>Umożliwiło mi to szersze spojrzenie na możliwości jakie daje nam Laravel i wzbogaconie poprzednio zdobytej
        wiedzy o nowe doświadczenia.</p>
      <h2>Moje zainteresowania</h2>
      <p>W wolnym czasie przyjmuje małe zlecenia na strony lub serwisy internetowe. Uczę się nowych języków
        programowania lub frameworków w znanych mi już technologiach. Hobbistycznie, tworzę także rozwiązania do
        problemów przy prywatnych projektach.</p>
    </div>
  </section>
</template>

<style lang="scss">
section#about {
  padding: 45px 0;
  background-color: #fafafa !important;

  h2 {
    margin-top: 25px;

    &:first-of-type {
      margin-top: 10px;
    }
  }

  h3 {
    font-size: 1.3em;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  a {
    color: #8D8D8D;

    &:hover {
      color: #A2CF00;
    }
  }
}
</style>

<script>
export default {
  name: 'About',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  mounted () {
    const header = {
      title: this.$route.meta.title,
      description: 'Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.'
    }
    this.$store.commit('setHeader', header)
  },
  destroyed () {
    this.$store.commit('resetHeaderTitle')
    this.$store.commit('resetHeaderDescription')
  }
}
</script>
