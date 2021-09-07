<template>
  <section class="project" v-if="project">
    <header class="project-header">
      <h1>{{ project.title }}</h1>
      <ul class="project-info">
        <li class="info-text">
          <font-awesome-icon class="icon" :icon="['far', 'clock']"/>
          <span>{{ project.release_data }}</span>
        </li>
        <li class="info-text">
          <font-awesome-icon class="icon" :icon="['far', 'user']"/>
          <span>{{ project.author }}</span>
        </li>
        <li class="info-text">
          <font-awesome-icon class="icon" :icon="['far', 'folder']"/>
          <span>{{ getCategoryName(project.categories)[0] }}</span>
        </li>
        <li class="info-text">
          <font-awesome-icon class="icon" :icon="['fas', 'code-branch']"/>
          <span>{{ project.version }}</span>
        </li>
      </ul>
    </header>
    <div class="container">
      <component :is="`figure`" class="project-photo">
        <img :src="`${publicPath}${project.image}`" :alt="project.title">
      </component>
      <div class="content">
        <p v-for="(description, key) in project.description.split('\n')" :key="key">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
  <div v-else class="loading">
    <div class="loading-animation"></div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      project: null
    }
  },
  mounted () {
    if (this.getCategories.length === 0) {
      this.$store.dispatch('fetchCategories')
    }
    this.loadProject(this.$route.params.id)
  },
  computed: {
    getCategories () {
      return this.$store.getters.getCategories
    }
  },
  methods: {
    getCategoryName (categories) {
      const categoriesText = []
      categories.forEach(categoryElement => {
        const cat = this.getCategories.find(category => category.slug === categoryElement)
        if (cat) {
          categoriesText.push(cat.name)
        }
      })
      return categoriesText
    },
    loadProject (id) {
      fetch('https://api.kamilcraft.com/projects/' + id)
        .then(response => response.json())
        .then(data => {
          this.project = data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/default";

.project {
  .project-header {
    @extend .container;
    text-align: center;
    margin-bottom: 25px;

    h1 {
      font-size: 2.2em;
      font-weight: lighter;
      line-height: 2.4em;
    }

    .project-info {
      display: flex;
      list-style: none;
      justify-content: center;

      .info-text {
        display: flex;
        align-items: center;

        .icon {
          width: 2em;
        }

        span {
          font-weight: lighter;
        }

        &:not(&:last-child) {
          margin-right: 15px;
        }
      }
      @media screen and (max-width: 560px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 15px;

        .info-text {
          &:not(&:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }

  .container {
    .project-photo {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    }

    .project-photo, .project-photo img {
      width: 100%;
    }

    .project-photo img {
      display: block;
      object-fit: cover;
      max-height: 500px;
    }

    .content {
      margin: 35px 0;

      p {
        text-align: justify;
        text-indent: 1.5em;
        line-height: 1.8em;

        @media screen and (max-width: 600px) {
          font-size: 1em;
          line-height: 1.5em;
        }
      }
    }
  }
}
</style>
