<template>
  <section class="contact">
    <div class="container">
      <MailContact />
      <OtherContact />
    </div>
  </section>
</template>

<script>
import MailContact from '../components/sections/contacts/MailContact'
import OtherContact from '../components/sections/contacts/OtherContact'

export default {
  name: 'Contact',
  mounted () {
    const header = {
      title: this.$route.meta.title,
      description: 'Chcesz o coś zapytać? Chciałbyś współpracować? Napisz!'
    }
    this.$store.commit('setHeader', header)
  },
  components: {
    MailContact,
    OtherContact
  }
}
</script>

<style lang="scss">
  .contact {
    padding: 25px 0;

    .container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    @media screen and (max-width: 940px) {
      .container {
        display: block;
        margin: 0 auto;

        .contact-container {
          margin: 0 auto 25px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    @media screen and (max-width: 640px) {
      .container {
        padding: 0 10px;

        .contact-container {
          max-width: unset;
        }
      }
    }
  }
</style>
