<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="logo">Kamil<span class="logo-element">Craft</span></div>
      <ul class="social-media">
        <li class="social-link"
            v-for="link in socialLinks"
            :key="link.title.slug">
          <a class="link"
             :href="link.link"
             :title="link.title"
             target="_blank">
            <font-awesome-icon class="icon" :icon="['fab', link.icon]" />
            <span class="title">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="container"></div>
  </footer>
</template>

<style lang="scss" scoped>
@import "scss/default";

.footer {
  background-color: #323232;
  padding: 35px 0;

  &-container {
    @extend .container;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      padding: 14px 20px 14px 40px;
      font-family: 'Thasadith', sans-serif;
      font-size: 2.5em;
      color: #D4D4D4;
      background-color: #5B5B5B;

      .logo-element {
        color: #A2CF00;
      }
    }

    .social-media {
      display: flex;
      list-style: none;

      .social-link {
        margin-right: 25px;
        font-size: 1.1em;

        a {
          color: #A3A3A3;

          .icon {
            margin-right: 5px;
          }

          @include media-tablet {
            .title {
              display: none;
            }
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }

      @include media-mobile {
        padding-right: 15px;
      }
    }
    @include media-mobile {
      padding: 0;
    }
  }

  @include media-mobile {
    padding: 15px 0;
  }
}
</style>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      socialLinks: [
        { link: 'https://www.youtube.com/user/kamilniemczycki', icon: 'youtube', title: 'Oglądaj mnie na YouTube' },
        { link: 'https://www.facebook.com/nikcamii', icon: 'facebook', title: 'Znajdź mnie na Facebooku' }
      ]
    }
  }
}
</script>
