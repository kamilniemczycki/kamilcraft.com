<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="container_logo">Kamil<span class="logo_element">Craft</span></div>
      <ul class="socials">
        <li class="social_link"
            v-for="link in socialLinks"
            :key="link.title.slug">
          <a class="link"
             :href="link.link"
             :title="link.title"
             target="_blank"
             rel="noopener nofollow noreferrer">
            <font-awesome-icon class="icon" :icon="['fab', link.icon]" />
            <span class="social_title">{{ link.title }}</span>
            <span class="social_shortcut">{{ link.shortcut }}</span>
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

  &_container {
    @extend .container;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container_logo {
      padding: 14px 20px 14px 40px;
      font-family: 'Thasadith', sans-serif;
      font-size: 2.5em;
      color: #D4D4D4;
      background-color: #5B5B5B;

      .logo_element {
        color: #A2CF00;
      }
    }

    .socials {
      display: flex;
      list-style: none;

      .social_link {
        margin-right: 25px;
        padding-right: 15px;
        font-size: 1.1em;

        a {
          color: #A3A3A3;

          .icon {
            margin-right: 5px;
          }

          .social_shortcut {
            display: none;
          }

          @include media-tablet {
            .social_title {
              display: none;
            }

            .social_shortcut {
              display: inline-block;
            }
          }

          @include media-mobile {
            .social_shortcut {
              display: none;
            }
          }
        }

        @include media-mobile {
          padding-right: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    @include media-tablet {
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
        { link: 'https://www.youtube.com/user/kamilniemczycki', icon: 'youtube', title: 'Oglądaj mnie na YouTube', shortcut: 'YouTube' },
        { link: 'https://www.facebook.com/nikcamii', icon: 'facebook', title: 'Znajdź mnie na Facebooku', shortcut: 'Facebook' }
      ]
    }
  }
}
</script>
