<template>
  <section
    v-if="isLoaded"
    class="max-w-screen-xl mx-auto px-6 xl:px-2 py-8"
  >
    <header class="text-neutral-800 font-roboto">
      <h1 class="text-center text-4xl font-light pb-5">
        {{ project.title }}
      </h1>
      <ul class="grid grid-cols-2 gap-3 md:flex md:gap-5 justify-center list-none">
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            class="w-4"
            :icon="['far', 'clock']"
          />
          <span>{{ project.release_date }}</span>
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            class="w-4"
            :icon="['far', 'user']"
          />
          <span>{{ project.author }}</span>
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            class="w-4"
            :icon="['far', 'folder']"
          />
          <span>{{ getCategoryName(project.categories) }}</span>
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            class="w-4"
            :icon="['fas', 'code-branch']"
          />
          <span>{{ project.project_version }}</span>
        </li>
        <li
          v-if="project.project_url"
          class="flex items-center gap-2"
        >
          <FontAwesomeIcon
            class="w-4"
            :icon="['fas', 'link']"
          />
          <span>
            <a
              :href="project.project_url"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Link
            </a>
          </span>
        </li>
      </ul>
    </header>
    <div class="pt-5">
      <figure class="w-full shadow-xl">
        <img
          class="block max-h-[31.25rem] object-cover"
          :src="project.images.large"
          :alt="project.title"
        >
      </figure>
      <Markdown
        class="markdown mt-9"
        :source="project.description"
      />
    </div>
  </section>
  <div
    v-else
    class="flex items-center"
  >
    <div class="loading_animation" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Markdown from '@/components/markdowns/MarkdownDescription.vue';

const apiURL = import.meta.env.VITE_APP_API_URL;
const route = useRoute();
const store = useStore();

const isLoaded = ref(false);
let project = reactive({});

const getCategories = computed(() => store.getters.getCategories);

onMounted(() => {
  if (getCategories.value.length === 0) {
    store.dispatch('fetchCategories');
  }
  loadProject(route.params.id);
})

function getCategoryName(categories = []) {
  const categoriesText = [];
  categories.forEach(categoryElement => {
    const category = getCategories.value.find(category => category.slug === categoryElement);
    if (category) {
      categoriesText.push(category.name);
    }
  });
  return categoriesText[0] ?? undefined;
}

function loadProject(id) {
  fetch(apiURL + '/project/' + id)
    .then(response => response.json())
    .then(data => {
      project.title = data.title;
      project.description = data.description;
      project.release_date = data.release_date;
      project.author = data.author;
      project.categories = data.categories;
      project.project_version = data.project_version;
      project.project_url = data.project_url;
      project.images = data.images;
      isLoaded.value = true;
    });
}
</script>

<style lang="scss">
@import "scss/default";

a {
  @apply text-neutral-800 hover:text-kamilcraft-green;
}

.markdown {
  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-[2rem];
  }

  h3 {
    @apply text-[1.5rem];
  }

  p, ol li, ul li {
    @apply text-lg;
  }

  p + ol, p + ul, p + blockquote {
    @apply -mb-2;
  }

  ol {
    @apply list-decimal;
  }

  ul {
    @apply list-disc;
  }

  ol, ul {
    @apply mb-2.5;
    padding-inline-start: 1.75rem;

    li img {
      @apply block w-full pr-1 pb-1 mt-3.5;
    }
  }

  p {
    @apply mb-2 text-justify;
  }

  blockquote {
    @apply pl-6 ml-5 border-neutral-400;

    p {
      text-indent: unset;
    }
  }
}
</style>
