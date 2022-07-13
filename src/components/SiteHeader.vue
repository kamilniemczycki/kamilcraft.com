<template>
  <header :class="thisClass">
    <Navigation :is-home-page="isHome" />
    <div
      v-if="isTitle"
      class="header-info"
      :class="{ 'header-info-home': isHome }"
    >
      <h1>{{ getTitle }}</h1>
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
import Navigation from './NavigationHeader'

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

<style lang="scss">
.home-page {
  background: linear-gradient(237.74deg, #1199A5 0%, #436DA7 83%);
}
.sub-page {
  background-color: #EFEFEF;
}
.header-info {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 10px;
  h1 {
    position: relative;
    font-weight: lighter;
    font-size: 2.5em;
    line-height: 1.5em;
    margin-bottom: 25px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100px;
      height: 2px;
      background-color: #A2CF00;
      left: 50%;
      margin-left: -50px;
    }
  }
  &-home {
    color: white;
  }
}
</style>
