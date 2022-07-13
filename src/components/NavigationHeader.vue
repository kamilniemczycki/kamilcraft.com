<template>
  <div
    class="flex relative items-center justify-between md:justify-start max-w-screen-lg mx-auto gap-5"
    :class="{ 'clicked-menu': isClicked }"
  >
    <RouterLink to="/">
      <div
        class="bg-white text-gray-800 pl-10 pr-5 py-2.5 text-logo-size leading-normal font-thasadith"
        :class="{ 'clicked-logo': isClicked }"
        @click="linkClicked"
      >
        Kamil<span class="text-lime-500">Craft</span>
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
              class="hover:text-lime-500"
              :class="[ (!isActive && isHomePage && !isClicked) ? 'text-white' : (isActive ? 'text-lime-500' : 'text-gray-500') ]"
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

<!--<style lang="scss" scoped>
//@import "scss/media";
//
//.sub-page > .container {
//  .nav-btn {
//    color: #8D8D8D;
//  }
//
//  .nav .site-menu .menu-element {
//    a:not([class|=router-link]) {
//      color: #8D8D8D;
//
//      &:hover {
//        color: #A2CF00;
//      }
//    }
//  }
//}
//.container {
//  display: flex;
//  height: 80px;
//  align-items: center;
//  justify-content: flex-start;
//  padding: 0;
//
//  div.logo {
//    padding: 14px 20px 14px 40px;
//    font-family: 'Thasadith', sans-serif;
//    font-size: 2.5em;
//    color: #5C5C5C;
//    background-color: white;
//
//    .logo-element {
//      color: #A2CF00;
//    }
//  }
//
//  &-menu-active {
//    color: #8D8D8D;
//    animation: container-active-menu 500ms forwards ease-in-out;
//
//    div.logo {
//      animation: logo-active-menu 500ms forwards ease-in-out;
//    }
//    .nav {
//      .nav-btn {
//        color: #8D8D8D;
//      }
//      .site-menu .menu-element a {
//        color: #8D8D8D;
//      }
//    }
//  }
//}
//.nav {
//  margin-left: 20px;
//  z-index: 10;
//  .nav-btn {
//    display: none;
//    margin: 10px 25px;
//    font-size: 2em;
//    color: white;
//    background: transparent !important;
//    border: none;
//  }
//  .site-menu {
//    display: flex;
//    list-style: none;
//
//    .menu-element {
//      margin-right: 30px;
//
//      a {
//        color: #EBEBEB;
//
//        &.router-link-exact-active, &:hover {
//          color: #A2CF00;
//        }
//      }
//
//      &:last-child {
//        margin-right: unset;
//      }
//    }
//  }
//  @include media-tablet {
//    margin-left: 0;
//
//    .nav-btn {
//      display: block;
//    }
//
//    .site-menu {
//      display: none;
//      width: 100%;
//      position: absolute;
//      top: 80px;
//      left: 0;
//      background-color: white;
//      box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
//
//      .menu-element {
//        width: 100%;
//        padding: 5px 20px;
//        text-align: right;
//        font-size: 1.8em;
//        line-height: 2em;
//      }
//    }
//
//    .menu-clicked {
//      display: block;
//    }
//  }
//}
//@include media-tablet {
//  .container {
//    justify-content: space-between;
//  }
//}
//@keyframes container-active-menu {
//  0% {
//    background-color: transparent;
//  }
//  100% {
//    background-color: #EFEFEF;
//  }
//}
//@keyframes logo-active-menu {
//  0% {
//    background-color: white;
//  }
//  100% {
//    background-color: #F6F6F6;
//  }
//}
</style>-->
