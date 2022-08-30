<template>
  <footer class="bg-neutral-800 py-8">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto">
      <div class="bg-neutral-600 text-white pl-10 pr-5 py-2.5 text-logo-size leading-normal font-thasadith">
        Kamil<span class="text-kamilcraft-green">Craft</span>
      </div>
      <ul class="flex gap-5 pr-3 text-lg">
        <li
          v-for="link in socialLinks"
          :key="link.title.slug"
        >
          <a
            class="text-neutral-400 hover:text-neutral-500"
            :href="link.link"
            :title="link.title"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <FontAwesomeIcon
              class="mr-1"
              :icon="['fab', link.icon]"
            />
            <span class="hidden lg:inline-block">{{ link.title }}</span>
            <span class="hidden sm:inline-block lg:hidden">{{ link.shortcut }}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    link: 'https://www.youtube.com/user/kamilniemczycki',
    icon: 'youtube',
    title: 'Oglądaj mnie na YouTube',
    shortcut: 'YouTube'
  },
  {
    link: 'https://www.facebook.com/nikcamii',
    icon: 'facebook',
    title: 'Znajdź mnie na Facebooku',
    shortcut: 'Facebook'
  },
  {
    link: 'https://github.com/kamilniemczycki/kamilcraft.com',
    icon: 'github',
    title: 'Kod na GitHub',
    shortcut: 'GitHub'
  }
]
</script>
