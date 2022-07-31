<template>
  <section class="flex flex-col px-3 py-6 md:flex-row items-start justify-center mx-auto gap-5">
    <MailContact />
    <OtherContact />
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MailContact from '../components/sections/contacts/MailContact'
import OtherContact from '../components/sections/contacts/OtherContact'

const route = useRoute()
const store = useStore()

onMounted(() => {
  const header = {
    title: route.meta.title,
    description: 'Chcesz o coś zapytać? Chciałbyś współpracować? Napisz!'
  }
  store.commit('setHeader', header)
})
</script>
