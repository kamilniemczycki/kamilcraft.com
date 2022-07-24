<template>
  <section class="max-w-screen-xl mx-auto px-6 xl:px-2 py-11">
    <p class="font-bold">
      Nazywam się Kamil Niemczycki. Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.
      W projektach wykorzystuję techologie oparte o PHP i JavaScript, tworząc skomplikowane i skalowalne aplikacje internetowe.
    </p>
    <h2 class="text-[2rem]">
      Studia
    </h2>
    <p>
      Jestem absolwentem Państwowej Wyższej Szkoły Zawodowej im. Witelona w Legnicy. Studiowałem na kierunku <em>Informatyka</em> o specjalności <em>Programowanie Aplikacji Mobilnych i Internetowych.</em>
    </p>
    <p>
      Podczas studiów zdobyłem niezbędną wiedzę z zakresu projektowania, wdrażania i rozwoju aplikacji internetowych, mobilnych i desktopowych.
      Zdobyłem także umiejętności pracy w zespole, które owocują tworzeniem merytorycznej dyskusji na temat części lub całości projektu.
    </p>
    <h3 class="text-[1.5rem]">
      Kursy
    </h3>
    <p>
      W ramach studiów uzyskałem zaświadczenie dotyczące ukończenia kursu:
      <a
        :href="publicPath + 'download/certyfikat-laravel.pdf'"
        class="text-gray-500 underline hover:text-kamilcraft-green hover:no-underline"
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
        Architektura aplikacji internetowych opartych o framework Laravel
      </a>.
    </p>
    <p>
      Umożliwiło mi to szersze spojrzenie na możliwości jakie daje nam Laravel i wzbogaconie poprzednio zdobytej
      wiedzy o nowe doświadczenia.
    </p>
    <h2 class="text-[2rem]">
      Moje zainteresowania
    </h2>
    <p>
      W wolnym czasie przyjmuje małe zlecenia na strony lub serwisy internetowe. Uczę się nowych języków
      programowania lub frameworków w znanych mi już technologiach. Hobbistycznie, tworzę także rozwiązania do
      problemów przy prywatnych projektach.
    </p>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const publicPath = process.env.VUE_APP_BASE_URL + '/'

const store = useStore()
const route = useRoute()

onMounted(() => {
  const header = {
    title: route.meta.title,
    description: 'Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.'
  }
  store.commit('setHeader', header)
})

onUnmounted(() => {
  store.commit('resetHeaderTitle')
  store.commit('resetHeaderDescription')
})
</script>
