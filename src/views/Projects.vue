<template>
  <div>
    <div class="category-menu">
      <ul class="categories">
        <li class="category"
            v-for="category in categories.list"
            :key="category.slug"
            :class="{ 'category-active': categories.active === category.slug }"
            @click="changeCategory(category.slug)">
          <a :title="`Kategoria ${category.name}`">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <projects :projects="projects.active" />
  </div>
</template>

<style lang="scss">
.category-menu {
  padding-top: 45px;
  .categories {
    display: flex;
    justify-content: center;
    list-style: none;
    .category {
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
          width: 100%;
          height: 2px;
          background-color: #A2CF00;
          transform: translateY(8px);
        }
      }
    }
  }
}
.projects {
  padding-top: 25px;
}
</style>

<script>
import SelectedProjects from '../components/SelectedProjects'

export default {
  name: 'Projects',
  data () {
    return {
      categories: {
        list: [],
        active: 'wszystkie'
      },
      publicPath: process.env.BASE_URL,
      projects: {
        all: [],
        active: []
      }
    }
  },
  mounted () {
    this.categories.list = [
      { name: 'Wszystkie', slug: 'wszystkie' },
      { name: 'Wordpress', slug: 'wordpress' },
      { name: 'Prywatne', slug: 'prywatne' },
      { name: 'Zlecenia', slug: 'zlecenia' }
    ]
    this.projects.all = [
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
        title: 'Youtube.com',
        category: 'prywatne',
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
        title: 'Projekt 14',
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
        category: 'prywatne',
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
        category: 'prywatne',
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
        title: 'Projekt 20',
        category: 'zlecenia',
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
    this.projects.active = this.projects.all
  },
  methods: {
    loadListWhereCategory (category) {
      if (category !== 'wszystkie') {
        const projects = this.projects.all.filter(project => project.category === category)
        this.projects.active = projects
      } else {
        this.projects.active = this.projects.all
      }
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
