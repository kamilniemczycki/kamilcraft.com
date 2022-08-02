<template>
  <div
    class="flex relative items-center justify-between md:justify-start max-w-screen-xl mx-auto gap-5"
    :class="{ 'clicked-menu': isClicked }"
  >
    <RouterLink to="/">
      <div
        class="bg-white text-gray-800 pl-10 pr-5 py-2.5 text-logo-size leading-normal font-thasadith"
        :class="{ 'clicked-logo': isClicked }"
        @click="linkClicked"
      >
        Kamil<span class="text-kamilcraft-green">Craft</span>
      </div>
    </RouterLink>
    <nav>
      <button
        class="md:hidden text-3xl mx-5"
        :class="[ (isHomePage && !isClicked) ? 'text-white' : 'text-gray-600' ]"
        title="Menu"
        @click="clickMenu"
      >
        <font-awesome-icon
          v-if="!isClicked"
          icon="bars"
        />
        <font-awesome-icon
          v-else
          icon="times"
        />
      </button>
      <ul
        :class="[ isClicked ? 'absolute top-20 left-0 w-full z-10 text-3xl text-right bg-white shadow-lg' : 'hidden md:flex md:flex-row md:gap-9' ]"
      >
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.slug"
          :class="{ 'py-5 px-3 leading-6': isClicked }"
          @click="linkClicked"
        >
          <RouterLink
            v-slot="{ href, navigate, isActive }"
            :to="menuItem.uri"
            custom
          >
            <a
              :href="href"
              class="hover:text-kamilcraft-green"
              :class="[ (!isActive && isHomePage && !isClicked) ? 'text-white' : (isActive ? 'text-kamilcraft-green' : 'text-gray-500') ]"
              @click="navigate"
            >
              {{ menuItem.title }}
            </a>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'

defineProps({
  isHomePage: {
    type: Boolean,
    default: false
  }
})

const menuItems = [
  {
    slug: 'start',
    title: 'Start',
    uri: '/'
  },
  {
    slug: 'projects',
    title: 'Projekty',
    uri: '/projects'
  },
  {
    slug: 'about',
    title: 'O mnie',
    uri: '/about'
  },
  {
    slug: 'contact',
    title: 'Kontakt',
    uri: '/contact'
  }
]

const clicked = ref(false)
const isClicked = computed(() => clicked.value)

function changeClickedStatus() {
  clicked.value = !clicked.value
}

function clickMenu() {
  changeClickedStatus()
}

function linkClicked() {
  if (isClicked.value) {
    changeClickedStatus()
  }
}
</script>

<style lang="scss">
.clicked-menu {
  animation: bg-menu-animation 500ms forwards ease-in-out;
}

.clicked-logo {
  animation: bg-logo-animation 500ms forwards ease-in-out;
}

@keyframes bg-menu-animation {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #EFEFEF;
  }
}
@keyframes bg-logo-animation {
  0% {
    background-color: white;
  }
  100% {
    background-color: #F6F6F6;
  }
}
</style>
