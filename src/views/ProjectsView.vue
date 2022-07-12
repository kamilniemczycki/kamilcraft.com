<template>
  <div>
    <div class="project_categories">
      <ul class="categories">
        <li
          v-for="category in getCategories"
          :key="category.slug"
          class="categories_element"
          :class="{ 'categories_element-active': categories.active === category.slug }"
          @click="changeCategory(category.slug)"
        >
          <a :title="`Kategoria ${category.name}`">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <SelectedProjects :projects="projects" />
    <div
      v-if="projects.length === 0"
      class="loading"
    >
      <div class="loading_animation" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import SelectedProjects from '../components/SelectedProjects'

const store = useStore()

const categories = reactive({
  active: 'all'
})
const projects = reactive([])

const getCategories = computed(() => store.getters.getCategories)

onMounted(() => {
  loadAllData()
})

onUnmounted(() => {
  store.commit('resetHeaderTitle')
  store.commit('resetHeaderDescription')
})

function loadAllData () {
  store.dispatch('fetchCategories')
  store.dispatch('fetchProjects').then(loadedProjects => {
    loadedProjects.forEach(project => {
      projects.push(project)
    })
  })
}

function loadListWhereCategory(category) {
  projects.splice(0)
  setTimeout(() => {
    if (category !== 'all') {
      const storedProjects = store.getters.getProjects.filter(project => project.categories.includes(category))
      storedProjects.forEach(project => {
        projects.push(project)
      })
    } else {
      store.getters.getProjects.forEach(project => {
        projects.push(project)
      })
    }
  }, 500)
}

function changeCategory(category) {
  categories.active = category
  loadListWhereCategory(category)
}
</script>

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
