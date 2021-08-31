<template>
  <header :class="thisClass">
    <navigation/>
    <div v-if="isTitle" class="header-info" :class="{ 'header-info-home': isHome }">
      <h1>{{ getTitle }}</h1>
      <p v-if="isDescription && descriptionType === 'string'">{{ getDescription }}</p>
      <p v-else-if="isDescription && descriptionType === 'array'"
         v-for="(desc, key) in getDescription" :key="key">{{ desc }}</p>
    </div>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'SiteHeader',
  computed: {
    isHome () {
      return this.$route.path === '/'
    },
    thisClass () {
      return [this.isHome ? 'home-page' : 'sub-page']
    },
    getTitle () {
      return this.$store.getters.getHeader.title
    },
    isTitle () {
      return this.getTitle !== null
    },
    getDescription () {
      return this.$store.getters.getHeader.description
    },
    descriptionType () {
      const isArray = this.getDescription instanceof Array
      return isArray ? 'array' : typeof this.getDescription
    },
    isDescription () {
      return this.getDescription !== null
    }
  },
  components: {
    navigation: Navigation
  }
}
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
