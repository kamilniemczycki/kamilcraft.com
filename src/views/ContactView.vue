<template>
  <section class="contact">
    <div class="container">
      <MailContact />
      <OtherContact />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MailContact from '../components/sections/contacts/MailContact'
import OtherContact from '../components/sections/contacts/OtherContact'

const route = useRoute()
const store = useStore()

onMounted(() => {
  const header = {
    title: route.meta.title,
    description: 'Chcesz o coś zapytać? Chciałbyś współpracować? Napisz!'
  }
  store.commit('setHeader', header)
})
</script>

<style lang="scss">
@import "scss/media";

.contact {
  padding: 25px 0;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .contact_container, .contact_info {
    margin: 10px;
    max-width: 500px;
    background-color: #eaeaea;
    border: 2px solid #dadada;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }

  @include media-tablet {
    .container {
      display: block;
      margin: 0 auto;

      .contact_container, .contact_info {
        margin: 0 auto 25px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  @include media-mobile {
    .container {
      padding: 0 10px;

      .contact_container {
        max-width: unset;
      }
    }
  }
}
</style>
