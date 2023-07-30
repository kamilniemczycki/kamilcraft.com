<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import SelectedProjects from '@/components/SelectedProjects.vue';

const store = useStore();

const activeCategory = ref('all');
const projects = reactive([]);

const getCategories = computed(() => store.getters.getCategories);

onMounted(() => {
  loadAllData();
});

onUnmounted(() => {
  store.commit('resetHeaderTitle');
  store.commit('resetHeaderDescription');
});

function loadAllData () {
  store.dispatch('fetchCategories');
  store.dispatch('fetchProjects').then(loadedProjects => {
    loadedProjects.forEach(project => {
      projects.push(project);
    });
  });
}

function loadListWhereCategory(category) {
  projects.splice(0);
  setTimeout(() => {
    if (category !== 'all') {
      const storedProjects = store.getters.getProjects.filter(project => project.categories.includes(category));
      storedProjects.forEach(project => {
        projects.push(project);
      })
    } else {
      store.getters.getProjects.forEach(project => {
        projects.push(project);
      });
    }
  }, 500);
}

function changeCategory(category) {
  activeCategory.value = category
  loadListWhereCategory(category)
}

function selectedCategory(categorySlug) {
  return activeCategory.value === categorySlug;
}
</script>

<template>
  <SelectedProjects :projects="projects">
    <div class="pb-9">
      <ul class="flex justify-center list-none">
        <li
          v-for="category in getCategories"
          :key="category.slug"
          class="relative cursor-pointer mr-3 md:mr-5 last:mr-0 after:translate-y-2"
          :class="{ 'category-active': selectedCategory(category.slug) }"
          @click="changeCategory(category.slug)"
        >
          <a
            class="text-gray-500 hover:text-black"
            :title="`Kategoria ${category.name}`"
          >{{ category.name }}</a>
        </li>
      </ul>
    </div>
  </SelectedProjects>
  <div
    v-if="projects.length === 0"
    class="loading"
  >
    <div class="loading_animation" />
  </div>
</template>

<style lang="scss">
@import "scss/media";

.category-active::after {
  @apply absolute mx-auto left-0 right-0 bottom-0 h-0.5;
  background-color: #A2CF00;
  animation: load-underline 300ms forwards;
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
