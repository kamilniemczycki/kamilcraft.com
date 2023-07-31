<script setup>
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  });
}
</script>

<template>
  <div class="bg-neutral-50">
    <div class="max-w-screen-xl mx-auto px-6 xl:px-2 py-11">
      <div
        id="grid-columns"
        class="flex flex-col md:grid items-center"
      >
        <div id="grid-content">
          <h2 class="text-[2rem]">
            Kamil Niemczycki
          </h2>
          <div class="mb-2 text-[1.5rem]">
            Web Developer
          </div>
          <p>
            Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.
            W projektach wykorzystuję techologie oparte o PHP i JavaScript, tworząc skomplikowane i skalowalne aplikacje internetowe.
          </p>
          <div class="flex flex-col sm:flex-row justify-center md:justify-start py-6 gap-5">
            <BaseButton
              has-icon
              icon="portrait"
              is-reverse
              @click="scrollTo('#projects')"
            >
              Wybrane projekty
            </BaseButton>
            <BaseButton
              has-icon
              icon="user"
              @click="router.push('about')"
            >
              Więcej o mnie
            </BaseButton>
          </div>
        </div>
        <div id="grid-photo">
          <figure>
            <img
              src="/assets/me.jpg"
              class="mx-auto rounded-full object-cover w-[12.5rem] h-[12.5rem]"
              alt="Moje zdjęcie"
            >
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#grid-columns {
  grid-template-columns: 1fr 1fr .8fr;
  grid-template-areas:
    'text text photo';
}

#grid-content {
  grid-area: text;
}

#grid-photo {
  grid-area: photo;
}
</style>
