<template>
  <section class="selected-projects">
    <projects :projects="select_projects">
      <div class="header-container">
        <h2>Wybrane projekty</h2>
        <p>Poniżej przedstawiam Państwu, wybraną przeze mnie, listę projektów.</p>
      </div>
    </projects>
  </section>
</template>

<script>
import Projects from '../SelectedProjects'

export default {
  name: 'FavoriteProjects',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      select_projects: []
    }
  },
  mounted () {
    this.select_projects = [
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
      },
      {
        title: 'Projekt 3',
        category: '',
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
        title: 'Projekt 1',
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
    Projects
  }
}
</script>

<style lang="scss">
@import "scss/default";

.selected-projects {
  background-color: #fdfdfd !important;
}
.header-container {
  @extend .container;
}
</style>
