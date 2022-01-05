<template>
  <div>
    <div class="project_categories">
      <ul class="categories">
        <li class="categories_element"
            v-for="category in getCategories"
            :key="category.slug"
            :class="{ 'categories_element-active': categories.active === category.slug }"
            @click="changeCategory(category.slug)">
          <a :title="`Kategoria ${category.name}`">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <projects :projects="projects" />
    <div v-if="projects.length === 0" class="loading">
      <div class="loading_animation"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "scss/media";

.project_categories {
  padding-top: 45px;

  .categories {
    display: flex;
    justify-content: center;
    list-style: none;

    .categories_element {
      position: relative;
      cursor: pointer;
      margin-right: 25px;

      a {
        color: var(--text-color);
        &:hover {
          color: black;
        }
      }

      &:last-child {
        margin-right: 0;
      }

      &-active {
        &::after {
          content: '';
          position: absolute;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #A2CF00;
          transform: translateY(8px);
          animation: load-underline 300ms forwards;
        }
      }

      @include media-mobile {
        margin-right: 15px;
      }
    }
  }
}

.projects {
  padding-top: 25px;
  padding-bottom: 25px;
}

@keyframes loading-animation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes load-underline {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

<script>
import SelectedProjects from '../components/SelectedProjects'

export default {
  name: 'Projects',
  data () {
    return {
      categories: {
        active: 'all'
      },
      publicPath: process.env.BASE_URL,
      projects: []
    }
  },
  computed: {
    getCategories () {
      return this.$store.getters.getCategories
    }
  },
  mounted () {
    this.loadAllData()
  },
  destroyed () {
    this.$store.commit('resetHeaderTitle')
    this.$store.commit('resetHeaderDescription')
  },
  methods: {
    async loadAllData () {
      await this.$store.dispatch('fetchCategories')
      await this.$store.dispatch('fetchProjects').then(projects => {
        projects.sort((firstProduct, secondProduct) => {
          return secondProduct.id - firstProduct.id
        })
        this.projects = projects
      }).catch(error => {
        console.log(error)
      })
    },
    loadListWhereCategory (category) {
      this.projects = []
      setTimeout(() => {
        if (category !== 'all') {
          const projects = this.$store.getters.getProjects.filter(project => project.categories.includes(category))
          this.projects = projects
        } else {
          this.projects = this.$store.getters.getProjects
        }
      }, 500)
    },
    changeCategory (category) {
      this.categories.active = category
      this.loadListWhereCategory(category)
    }
  },
  components: {
    projects: SelectedProjects
  }
}
</script>
