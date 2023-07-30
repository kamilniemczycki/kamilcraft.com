<template>
  <section class="bg-neutral-50">
    <projects :projects="select_projects">
      <header>
        <h2 class="text-[2rem] mb-2">
          Wybrane projekty
        </h2>
        <p class="mb-5">
          Poniżej przedstawiam Państwu, wybraną przeze mnie, listę projektów.
        </p>
      </header>
    </projects>
    <div class="w-full -translate-y-5 pb-5 more-button">
      <GhostButton
        class="mx-auto"
        @click="router.push('projects')"
      >
        ZOBACZ WIĘCEJ
      </GhostButton>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Projects from '@/components/SelectedProjects.vue'
import GhostButton from '@/components/buttons/GhostButton.vue'

const router = useRouter()
const apiURL = import.meta.env.VITE_APP_API_URL

let select_projects = ref([])

onMounted(() => {
  loadProjectList()
})

function loadProjectList() {
  fetch(apiURL + '/projects?category=selected')
    .then(response => response.json())
    .then(data => {
      select_projects.value = data
    })
}
</script>

<style lang="scss">
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
