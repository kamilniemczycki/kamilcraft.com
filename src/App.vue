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
  color: #2c3e50;
}
a {
  text-decoration: none;
}
h2 {
  font-size: 1.8em;
  margin-bottom: 5px;
}
p {
  font-size: 1.1em;
  line-height: 1.4em;
  padding-bottom: 10px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
</style>

<script>
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>
