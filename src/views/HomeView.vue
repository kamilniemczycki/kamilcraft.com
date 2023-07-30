<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import About from '@/components/sections/AboutSection.vue';
import ExperiencesSection from '@/components/sections/ExperiencesSection.vue';
import FavoriteProjects from '@/components/sections/FavoriteProjects.vue';

const store = useStore();
const route = useRoute();

onMounted(() => {
  const header = {
    title: route.meta.title,
    description: [
      'Chciałbym Państwa powitać na mojej stronie!',
      'Przedstawiam tutaj część swojego życia związaną z programowaniem i projektowaniem aplikacji internetowych.'
    ],
  }
  store.commit('setHeader', header);
})

onUnmounted(() => {
  store.commit('resetHeaderTitle');
  store.commit('resetHeaderDescription');
})
</script>

<template>
  <section class="home">
    <About />
    <ExperiencesSection />
    <FavoriteProjects />
  </section>
</template>
