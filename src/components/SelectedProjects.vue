<template>
  <div class="projects">
    <slot></slot>
    <div class="container">
      <div class="project"
           v-for="project in projects"
           :key="project.title.slug">
        <img class="project-image" :src="project.image" :alt="project.title" />
        <div class="project-content">
          <h3 class="title">{{ project.title }}</h3>
          <div class="release">{{ project.version }} - {{ project.release_data }}</div>
          <div class="description">
            <p>{{ project.short_description }}</p>
          </div>
        </div>
        <div class="more-button">
          <base-btn has-icon
                    icon="eye"
                    is-reverse
                    class="btn">O projekcie</base-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.projects {
  padding-top: 45px;
  padding-bottom: 45px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(80px, auto);
    column-gap: 25px;
    row-gap: 20px;

    .project {
      display: grid;
      position: relative;
      grid-template-areas: 'image content';
      background-color: #fafafa;
      border: 1px solid rgba(0, 0, 0, .025);
      border-radius: 5px;

      .project-image {
        grid-area: image;
        width: 200px;
        height: 200px;
        object-fit: cover;
      }

      .project-content {
        grid-area: content;
        padding: 10px 15px;
        height: 200px;
        overflow-y: hidden;
        position: relative;

        .title {
          font-size: 1.3em;
          font-weight: normal;
          line-height: 1.5em;
        }

        .release {
          font-size: .9em;
          font-weight: bold;
          padding: 5px 0;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, #fafafa 100%);
        }
      }

      p {
        font-size: .9em;
      }
    }

    @media screen and (min-width: 901px) {
      .project {
        .more-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          .btn {
            display: none;
          }

          &:hover {
            background: rgba(0, 0, 0, .3);
            border-radius: 5px;
            .btn {
              display: flex;
              color: white;
              border-style: none;
              &:hover {
                background-color: #385c8a;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      .project {
        grid-template-areas: 'image' 'content';

        .project-image {
          width: 100%;
          height: 250px;
        }

        .project-content {
          height: auto;
          max-height: 250px;
        }

        .more-button {
          display: block;
          position: unset;
          margin-top: 8px;
          height: auto;
          left: unset;
          top: unset;
          .btn {
            display: flex;
            width: 100%;
            border-radius: 0;
            border-style: solid;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .projects .container {
    grid-template-columns: 1fr;
    padding: 25px;
    column-gap: 0;
    row-gap: 20px;
  }
}
</style>

<script>
import BaseButton from './BaseButton'

export default {
  name: 'SelectedProjects',
  data () {
    return {}
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
  },
  props: {
    projects: {
      type: Array
    }
  },
  components: {
    'base-btn': BaseButton
  }
}
</script>