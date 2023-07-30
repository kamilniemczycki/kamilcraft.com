<template>
  <header :class="thisClass">
    <Navigation :is-home-page="isHome" />
    <div
      v-if="isTitle"
      class="max-w-screen-header-content mx-auto text-center px-2.5 py-10"
      :class="{ 'text-white': isHome }"
    >
      <h1 class="mb-6 relative font-light text-[2.5rem] leading-[3.5rem] after:block after:absolute after:w-24 after:h-0.5 after:bg-kamilcraft-green after:left-1/2 after:-ml-12">
        {{ getTitle }}
      </h1>
      <p v-if="isDescription && descriptionType === 'string'">
        {{ getDescription }}
      </p>
      <p
        v-for="(desc, key) in getDescription"
        v-else-if="isDescription && descriptionType === 'array'"
        :key="key"
      >
        {{ desc }}
      </p>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Navigation from '@/components/NavigationHeader.vue'

const store = useStore()
const route = useRoute()

const isHome = computed(() => route.path === '/')
const thisClass = computed(() => [isHome.value ? 'home-page' : 'sub-page'])
const getTitle = computed(() => store.getters.getHeader.title)
const isTitle = computed(() => getTitle.value !== null)
const getDescription = computed(() => store.getters.getHeader.description)
const isDescription = computed(() => getDescription.value !== null)
const descriptionType = computed(() => {
  const isArray = getDescription.value instanceof Array
  return isArray ? 'array' : typeof getDescription.value
})
</script>

<style scoped>
.home-page {
  background: linear-gradient(237.74deg, #1199A5 0%, #436DA7 83%);
}
.sub-page {
  background-color: #EFEFEF;
}
</style>
