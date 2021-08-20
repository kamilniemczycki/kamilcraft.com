<template>
  <div id="app">
    <SiteHeader />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
</style>

<script>
import SiteHeader from '@/components/SiteHeader'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>
