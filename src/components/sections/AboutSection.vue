<template>
  <div class="about">
    <div class="container">
      <div id="grid">
        <div id="grid-text">
          <h2 class="name">
            Kamil Niemczycki
          </h2>
          <div class="tagline">
            Web Developer
          </div>
          <p>
            Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.
            W projektach wykorzystuję techologie oparte o PHP i JavaScript, tworząc skomplikowane i skalowalne aplikacje internetowe.
          </p>
          <div class="buttons">
            <BaseButton
              has-icon
              icon="portrait"
              is-reverse
              @click="scrollTo('.selected-projects')"
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
          <figure id="about-photo">
            <img :src="`${publicPath}assets/me.jpg`">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../BaseButton'
import { useRouter } from 'vue-router'

const router = useRouter()
const publicPath = process.env.VUE_APP_BASE_URL + '/'

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style lang="scss">
@import "scss/media";

.about {
  background-color: var(--gray-color) !important;

  .container {
    padding-top: 45px;
    padding-bottom: 45px;
  }
  h2.name {
    font-size: 2.1em;
    margin-bottom: 5px;
  }
  div.tagline {
    font-size: 1.6em;
    margin-bottom: .7em;
  }
  #grid {
     display: grid;
     grid-template-columns: 1fr 1fr .8fr;
     grid-template-areas:
       'text text photo';
     align-items: center;

     #grid-text {
       grid-area: text;
       text-align: left;

       .buttons {
         display: flex;
         justify-content: flex-start;
         padding: 25px 0;

         .btn {
           margin-right: 20px;

           &:last-child {
             margin-right: 0;
           }

           @include media-tablet {
             margin: 0 auto 15px;

             &:last-child {
               margin: 0 auto;
             }
           }
         }

         @include media-small {
           justify-content: center;
           margin-bottom: 25px;
         }

         @include media-tablet {
           display: block;
           margin-bottom: 25px;
         }
       }

       @include media-mobile() {
         .buttons .btn,
         .buttons a {
           min-width: unset;
           width: 100%;
         }
       }
     }
     #grid-photo {
       grid-area: photo;

       #about-photo img {
         border-radius: 50%;
       }
     }
     figure {
       text-align: center;
       img {
         object-fit: cover;
         width: 200px;
         height: 200px;
       }
     }
  }
  @include media-small {
    #grid {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
    'text text'
    'photo photo';
    }
  }
}
</style>
