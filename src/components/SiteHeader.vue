<template>
  <header class="page-header">
    <navigation/>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'SiteHeader',
  components: {
    navigation: Navigation
  }
}
</script>

<style lang="scss">
.page-header {
  background: linear-gradient(237.74deg, #1199A5 0%, #436DA7 83%);
}
</style>
