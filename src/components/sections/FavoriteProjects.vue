<template>
  <section class="selected-projects">
    <projects :projects="select_projects">
      <div class="header-container">
        <h2>Wybrane projekty</h2>
        <p>Poniżej przedstawiam Państwu, wybraną przeze mnie, listę projektów.</p>
      </div>
    </projects>
    <div class="more-button">
      <GhostButton @click.native="$router.push('projects')">
        ZOBACZ WIĘCEJ
      </GhostButton>
    </div>
  </section>
</template>

<script>
import Projects from '../SelectedProjects'
import GhostButton from '../GhostButton'

export default {
  name: 'FavoriteProjects',
  data () {
    return {
      publicPath: process.env.VUE_APP_BASE_URL + '/',
      select_projects: []
    }
  },
  mounted () {
    this.loadProjectList()
  },
  methods: {
    loadProjectList () {
      fetch(process.env.VUE_APP_API_URL + '/projects?category=selected')
        .then(response => response.json())
        .then(data => {
          this.select_projects = data
        })
    }
  },
  components: {
    GhostButton,
    Projects
  }
}
</script>

<style lang="scss" scoped>
@import "scss/default";

.selected-projects {
  background-color: #fdfdfd !important;

  .more-button {
    margin-bottom: 45px;

    .btn {
      margin: 0 auto;

      @include media-tablet {
        width: 100%;
      }
    }

    @include media-tablet {
      padding: 0 25px;
    }
  }
}
.header-container {
  @extend .container;
  margin-bottom: 15px;
}
</style>
