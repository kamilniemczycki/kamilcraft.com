<template>
  <div class="hello">
    <h1>{{ route.meta.title }}</h1>
    <p>Witam na mojej stronie głównej. Wszystkich zainteresowanych oczywiście 😁</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss">
  h1 {
    margin: 30px 0 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
