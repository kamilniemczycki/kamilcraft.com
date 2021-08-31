<template>
  <projects :projects="projects" />
</template>

<style lang="scss">

</style>

<script>
import SelectedProjects from '../components/SelectedProjects'

export default {
  name: 'Projects',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      projects: []
    }
  },
  mounted () {
    this.projects = [
      {
        title: 'KamilCraft.com',
        category: 'private',
        image: `${this.publicPath}assets/me.jpg`,
        release_data: '29.08.2021',
        version: 'v1.0.1',
        short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        title: 'Projekt 2',
        category: 'wordpress',
        image: `${this.publicPath}assets/me.jpg`,
        release_data: '29.08.2021',
        version: 'v1.0.0',
        short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        title: 'Projekt 3',
        category: 'private',
        image: `${this.publicPath}assets/me.jpg`,
        release_data: '29.08.2021',
        version: 'v1.0.0',
        short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        title: 'Projekt 4',
        category: '',
        image: `${this.publicPath}assets/me.jpg`,
        release_data: '29.08.2021',
        version: 'v1.0.0',
        short_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      }
    ]
  },
  components: {
    projects: SelectedProjects
  }
}
</script>
