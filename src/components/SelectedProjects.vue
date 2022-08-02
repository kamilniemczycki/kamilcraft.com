<template>
  <section
    id="projects"
    class="max-w-screen-xl mx-auto px-6 xl:px-2 py-10"
  >
    <slot />
    <div class="grid items-start grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
      <div
        v-for="project in projects"
        :key="project.title.slug"
        class="flex flex-col lg:grid grid-project relative bg-neutral-100 border border-gray-200 rounded-md"
      >
        <img
          v-if="project.images.small"
          class="project-image w-full h-[16rem] lg:w-[12.5rem] lg:h-[12.5rem] object-cover object-top rounded-t-md lg:rounded-bl-md lg:rounded-tr-none"
          :src="project.images.small"
          :alt="project.title"
        >
        <img
          v-else-if="project.images.large"
          class="project-image w-[12.5rem] h-[12.5rem] object-cover"
          :src="project.images.large"
          :alt="project.title"
        >
        <div class="project-content relative p-3 h-[12.5rem] overflow-y-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full">
          <header class="pb-2">
            <h3 class="text-lg font-bold">
              {{ project.title }}
            </h3>
            <p class="text-sm">
              {{ project.project_version }}
            </p>
          </header>
          <p
            class="text-sm"
            v-html="markdownToText(project)"
          />
        </div>
        <div
          class="project-button lg:flex lg:absolute lg:justify-center lg:items-center lg:left-0 lg:top-0 lg:w-full lg:h-full"
        >
          <BaseButton
            has-icon
            icon="eye"
            is-reverse
            class="w-full lg:w-80 rounded-t-none lg:rounded-t-md"
            title="Pokaż więcej"
            @click="router.push({ name: 'Project', params: { id: project.id } })"
          >
            O projekcie
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import BaseButton from '@/components/buttons/BaseButton'
import { marked } from 'marked'

defineProps({
  projects: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()
const router = useRouter()
const store = useStore()

onMounted(() => {
  const header = {
    title: route.meta.title,
    description: [
      'Witam Państwa na podstronie z moimi projektami!'
    ]
  }
  store.commit('setHeader', header)
})

function markdownToText (project) {
  const projectText = marked.parse(project.description)
  const nodeElement = document.createElement('div')
  nodeElement.innerHTML = projectText
  return nodeElement.querySelector('p').innerText.substr(0, 350)
}
</script>

<style lang="scss" scoped>
@import 'scss/media';

.grid-project {
  animation: load-project 2s forwards;

  .project-image, .project-content {
    object-position: top center;
  }

  .project-image {
    grid-area: image;
  }

  .project-content {
    grid-area: content;

    &::after {
      background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fafafa);
    }
  }
}

@screen lg {
  .grid-project {
    grid-template-areas: 'image content';
    grid-template-columns: 200px 1fr;

    .project-button {
      .btn {
        display: none;
      }
      &:hover {
        background: rgba(0, 0, 0, .3);
        border-radius: 5px;

        .btn {
          display: flex;

          &:hover {
            background-color: rgba(255, 255, 255, .9);
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
</style>
