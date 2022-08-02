<template>
  <SiteHeader />
  <main
    rel="main"
  >
    <RouterView />
  </main>
  <FooterComponent />
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader'
import FooterComponent from '@/components/FooterComponent'
</script>

<style lang="scss">
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
</style>
