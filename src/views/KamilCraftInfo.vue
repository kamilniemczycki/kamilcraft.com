<template>
  <section class="info">
    <div class="container">
      <h2>{{ $route.meta.title }}</h2>
      <p>Wersja projektu: {{ project.version }}</p>
      <p>Użyte paczki:</p>
      <ul class="package-list">
        <li v-for="(version, name) in project.dependencies" :key="name">{{ name }}: {{ version }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
const nodeProject = require('../../package.json')
export default {
  name: 'KamilCraftInfo',
  data () {
    return {
      project: {
        version: '',
        dependencies: []
      }
    }
  },
  mounted () {
    this.project.version = nodeProject.version
    this.project.dependencies = nodeProject.dependencies
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 45px;
  padding-bottom: 45px;

  .package-list {
    list-style: inside;
  }
}
</style>
