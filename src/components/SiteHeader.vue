<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Navigation from '@/components/NavigationHeader.vue';

import { getHeaderTitle, getHeaderDescription } from '@/HeaderReference';

const route = useRoute();

const isHome = computed(() => route.path === '/');
const thisClass = computed(() => [isHome.value ? 'home-page' : 'sub-page']);
const title = getHeaderTitle();
const isTitle = computed(() => title.value !== null);
const description = getHeaderDescription();
const isDescription = computed(() => description.value !== null);
</script>

<template>
  <header :class="thisClass">
    <Navigation :is-home-page="isHome" />
    <div
      v-if="isTitle"
      class="max-w-screen-header-content mx-auto text-center px-2.5 py-10"
      :class="{ 'text-white': isHome }"
    >
      <h1 class="mb-6 relative font-light text-[2.5rem] leading-[3.5rem] after:block after:absolute after:w-24 after:h-0.5 after:bg-kamilcraft-green after:left-1/2 after:-ml-12">
        {{ title }}
      </h1>
      <template v-if="isDescription">
        <p
          v-for="(descriptionLine, key) in description"
          :key="key"
        >
          {{ descriptionLine }}
        </p>
      </template>
    </div>
  </header>
</template>

<style scoped>
.home-page {
  background: linear-gradient(237.74deg, #1199A5 0%, #436DA7 83%);
}
.sub-page {
  background-color: #EFEFEF;
}
</style>
