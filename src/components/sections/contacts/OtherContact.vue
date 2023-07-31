<template>
  <div class="contact_info w-full bg-neutral-100 rounded-md border border-gray-200 md:max-w-[410px] p-2 shadow">
    <header class="mb-1.5">
      <h3 class="text-xl">
        Inne formy kontaktu:
      </h3>
    </header>
    <div class="flex flex-col gap-2.5 justify-start items-start">
      <div class="flex items-center gap-2 w-full rounded-md p-1.5 border border-neutral-200 bg-white">
        <img
          class="rounded-full w-12 h-12 object-contain border border-neutral-200"
          src="/assets/img/instagram.jpg"
          alt="Instagram"
        >
        <span
          id="instagram"
          class="font-bold"
        >
          <a
            href="https://www.instagram.com/nikcamii/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="hover:underline"
          >Instagram: @NiKCamii</a>
        </span>
      </div>
      <div class="flex items-center gap-2 w-full rounded-md p-1.5 border border-neutral-200 bg-white">
        <img
          class="rounded-full w-12 h-12 object-contain border border-neutral-200"
          src="/assets/img/facebook.jpg"
          alt="Facebook"
        >
        <span
          id="facebook"
          class="font-bold"
        >
          <a
            href="https://www.facebook.com/nikcamii/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="hover:text-gray-700 hover:underline"
          >Facebook: @NiKCamii</a>
        </span>
      </div>
      <div class="flex items-center gap-2 w-full rounded-md p-1.5 border border-neutral-200 bg-white">
        <img
          class="rounded-full w-12 h-12 object-contain border border-neutral-200"
          src="/assets/img/twitter.jpg"
          alt="Twitter"
        >
        <span
          id="twitter"
          class="font-bold"
        >
          <a
            href="https://twitter.com/nikcamii"
            target="_blank"
            rel="noopener nofollow noreferrer"
            class="hover:text-gray-700 hover:underline"
          >Twitter: @NiKCamii</a>
        </span>
      </div>
      <div class="flex items-center gap-2 w-full rounded-md p-1.5 border border-neutral-200 bg-white">
        <img
          class="rounded-full w-12 h-12 object-contain border border-neutral-200"
          src="/assets/img/gg.png"
          alt="Gadu-Gadu"
        >
        <span
          id="gg"
          class="font-bold"
        >GG: 38429969</span>
      </div>
      <div class="flex items-center gap-2 w-full rounded-md p-1.5 border border-neutral-200 bg-white">
        <img
          class="rounded-full w-12 h-12 object-contain border border-neutral-200"
          src="/assets/img/user.jpg"
          alt="E-mail"
        >
        <span
          id="mailto"
          class="font-bold"
        >
          <a
            href="mailto:contact@kamilcraft.com"
            class="hover:text-gray-700 hover:underline"
          >Email: contact@kamilcraft.com</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "scss/media";

@screen md {
  .contact_info {
    flex-basis: 410px;
  }
}

a {
  color: inherit;

  &:hover {
    -webkit-text-fill-color: #374151;
    color: #374151;
  }
}

#instagram {
  background: linear-gradient(120deg, #e99311, #8738b8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#facebook {
  color: #4267b2;
}

#twitter {
  color: #5eaade;
}

#mailto {
  color: #696969;
}

#gg {
  color: #ffa214;
}
</style>
