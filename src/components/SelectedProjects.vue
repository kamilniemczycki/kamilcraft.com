<template>
  <div class="projects">
    <slot></slot>
    <div class="container">
      <div class="project"
           v-for="project in projects"
           :key="project.title.slug">
        <img class="project_image" :src="project.image" :alt="project.title" />
        <div class="project_content">
          <h3 class="project_title">{{ project.title }}</h3>
          <div class="project_release">{{ project.version }}</div>
          <div class="project_description">
            <p>{{ project.short_description }}</p>
          </div>
        </div>
        <div class="more-button">
          <base-btn has-icon
                    icon="eye"
                    is-reverse
                    @click.native="$router.push({ name: 'Project', params: { id: project.id } })"
                    class="btn">O projekcie</base-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "scss/media";

.projects {
  padding-top: 45px;
  padding-bottom: 45px;

  .container {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(80px, auto);
    column-gap: 25px;
    row-gap: 20px;

    .project {
      display: grid;
      position: relative;
      grid-template-areas: 'image content';
      grid-template-columns: 200px 1fr;
      background-color: #fafafa;
      border: 1px solid rgba(0, 0, 0, .025);
      border-radius: 5px;
      animation: load-project 2s forwards;

      .project_image {
        grid-area: image;
        width: 200px;
        height: 200px;
        object-fit: cover;
      }

      .project_content {
        grid-area: content;
        padding: 10px 15px;
        height: 200px;
        overflow-y: hidden;
        position: relative;

        .project_title {
          font-size: 1.3em;
          font-weight: normal;
          line-height: 1.5em;
        }

        .project_release {
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

    @include media-tablet(true) {
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

    @include media-small {
      .project {
        display: block;

        .project_image {
          width: 100%;
          height: 250px;
        }

        .project_content {
          height: 125px;
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

@keyframes load-project {
  from {
    transform: translateY(20px);
    opacity: .1;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@include media-tablet {
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
        'Witam Państwa na podstronie z moimi projektami!',
        'Lista i treść jest niekompletna! (BETA)'
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
