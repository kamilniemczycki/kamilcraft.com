<template>
  <div class="projects">
    <div class="container">
      <div class="project"
           v-for="project in projects"
           :key="project.title.slug">
        <h3>{{ project.title }}</h3>
        <div class="release">{{ project.version }} - {{ project.release_data }}</div>
        <p>{{ project.short_description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.projects .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 15px;
  .project {
  }
}
</style>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        { title: 'Projekt 1', image: '/assets/me.jpg', release_data: '29.08.2021', version: 'v1.0.0', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'Projekt 2', image: '/assets/me.jpg', release_data: '29.08.2021', version: 'v1.0.0', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      ]
    }
  },
  mounted () {
    const header = {
      title: this.$route.meta.title,
      description: [
        'Ta podstrona jak zwykle nie ma listy projektów 😅',
        'Albo może jednak będzie posiadała piękne, ciekawe i inspirujące projekty?'
      ]
    }
    this.$store.commit('setHeader', header)
  }
}
</script>
