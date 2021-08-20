<template>
  <div id="app">
    <site-header />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  display: flex;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
</style>

<script>
import SiteHeader from './components/SiteHeader'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>
