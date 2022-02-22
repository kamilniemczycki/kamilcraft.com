<template>
  <section class="project" v-if="project">
    <header class="project_header">
      <h1>{{ project.title }}</h1>
      <ul class="project_info">
        <li class="info_text">
          <font-awesome-icon class="icon" :icon="['far', 'clock']"/>
          <span>{{ project.release_date }}</span>
        </li>
        <li class="info_text">
          <font-awesome-icon class="icon" :icon="['far', 'user']"/>
          <span>{{ project.author }}</span>
        </li>
        <li class="info_text">
          <font-awesome-icon class="icon" :icon="['far', 'folder']"/>
          <span>{{ getCategoryName(project.categories)[0] }}</span>
        </li>
        <li class="info_text">
          <font-awesome-icon class="icon" :icon="['fas', 'code-branch']"/>
          <span>{{ project.project_version }}</span>
        </li>
        <li class="info_text" v-if="project.project_url">
          <font-awesome-icon class="icon" :icon="['fas', 'link']"/>
          <span><a :href="project.project_url"
                  target="_blank"
                  rel="noopener nofollow noreferrer">Link</a></span>
        </li>
      </ul>
    </header>
    <div class="container">
      <component :is="`figure`" class="project-photo">
        <img :src="`${project.images.large}`" :alt="project.title">
      </component>
      <div class="content" v-html="markdownToHtml"></div>
    </div>
  </section>
  <div v-else class="loading">
    <div class="loading-animation"></div>
  </div>
</template>

<script>
import { marked } from 'marked'

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
    },
    markdownToHtml () {
      return marked.parse(this.project.description)
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
      fetch(process.env.VUE_APP_API_URL + '/project/' + id)
        .then(response => response.json())
        .then(data => {
          this.project = data
        })
    }
  }
}
</script>

<style lang="scss">
@import "scss/default";

.project {
  .project_header {
    @extend .container;
    text-align: center;
    margin-bottom: 25px;

    h1 {
      font-size: 2.2em;
      font-weight: lighter;
      line-height: 2.4em;
    }

    .project_info {
      display: flex;
      list-style: none;
      justify-content: center;

      .info_text {
        display: flex;
        align-items: center;

        .icon {
          width: 2em;
        }

        span {
          font-weight: lighter;
          white-space: nowrap;
        }

        &:not(&:last-child) {
          margin-right: 15px;
        }
      }
      @include media-tablet {
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

      a {
        color: #8D8D8D;

        &:hover {
          color: #A2CF00;
        }
      }

      h2, h3 {
        margin-top: 15px;
        margin-bottom: 5px;
      }

      h2:first-of-type {
        margin-top: 0;
      }

      h2 {
        font-size: 1.6em;
      }

      h3 {
        font-size: 1.4em;
      }

      p, ol li, ul li {
        line-height: 1.8em;
        font-size: 1.1em;

        @include media-tablet {
          font-size: 1.2em;
          line-height: 1.5em;
        }
      }

      p + ol, p + ul, p + blockquote {
        margin-top: -10px;
      }

      ol, ul {
        margin-bottom: 10px;
        padding-inline-start: 2.1em;

        li img {
          display: block;
          width: 100%;
          padding: 0 5px 5px;
          margin-top: .9em;
        }
      }

      p {
        margin-bottom: 10px;
        text-align: justify;
        /* text-indent: 1.5em; */
      }

      blockquote {
        padding-left: 25px;
        margin-left: 1.3em;
        border-left: 1px solid rgb(116, 116, 116);

        p {
          text-indent: unset;
        }
      }
    }
  }
}
</style>
