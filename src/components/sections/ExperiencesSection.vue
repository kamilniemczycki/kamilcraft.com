<script setup>
import { onMounted, reactive } from 'vue';

let list = reactive([]);

onMounted(() => {
  const importedList = () => import('@/resource/data/Technologies');
  importedList().then(data => {
    data.default.forEach(obj => {
      obj.showMore = false;
      list.push(obj);
    });
  });
});

function parseText(text) {
  return text.substr(0, 200).trim();
}

function showMore(skill) {
  skill.showMore = !skill.showMore;
}
</script>

<template>
  <div>
    <div class="max-w-screen-xl mx-auto px-6 xl:px-2 py-11">
      <h2 class="text-[2rem] mb-2">
        Wykorzystywane technologie
      </h2>
      <p class="mb-5">
        Programowaniem stron internetowych zajmuję się najmłodszych lat, czyli od 2011 roku. Pierwsze projekty były
        proste i najczęściej na użytek własny. Jednakże, doświadczenie zebrane przez lata pomogło mi wyselekcjonować
        technologie, które wspomagają pisanie i rozwijanie oprogramowania.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
          v-for="(skill, skillKey) in list"
          :key="skillKey"
          class="p-4 bg-neutral-50 rounded-lg"
        >
          <header>
            <div class="flex gap-2 text-3xl mb-2">
              <font-awesome-icon
                v-for="(icon, iconKey) in skill.icons"
                :key="iconKey"
                :class="icon.class"
                :icon="['fab', icon.name]"
                :alt="icon.alt"
                :title="icon.title"
              />
            </div>
            <h3 class="text-lg font-bold">
              {{ skill.header }}
            </h3>
          </header>
          <p class="text-sm">
            {{ skill.showMore || skill.description.length < 200 ? skill.description : parseText(skill.description) }}...
            <a
              v-if="!skill.showMore"
              class="text-neutral-500 hover:text-neutral-700 hover:underline cursor-pointer"
              @click="showMore(skill)"
            >Więcej</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-js {
  color: #F1DE4F;
}
.icon-php {
  color: #777bb3;
}
.icon-laravel {
  color: #FF2D20;
}
.icon-vue {
  color: #64B687;
}
.icon-html5 {
  color: #DE6E3C;
}
.icon-node {
  color: #64B687;
}
.icon-css3 {
  color: #53A7DC;
}
.icon-sass {
  color: #BF6B97;
}
</style>
