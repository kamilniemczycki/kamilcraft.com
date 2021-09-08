<template>
  <div class="about">
    <div class="container">
      <div id="grid">
        <div id="grid-text">
          <h2 class="name">Kamil Niemczycki</h2>
          <div class="tagline">Web Developer</div>
          <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</p>
          <div class="buttons">
            <base-btn has-icon
                      icon="portrait"
                      is-reverse
                      @click.native="scrollTo('.selected-projects')">Wybrane projekty</base-btn>
            <base-btn has-icon
                      icon="user"
                      @click.native="$router.push('about')">Więcej o mnie</base-btn>
          </div>
        </div>
        <div id="grid-photo">
          <figure id="about-photo">
            <img :src="`${publicPath}assets/me.jpg`" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

           @media screen and (max-width: 600px) {
             margin: 0 auto 15px;

             &:last-child {
               margin: 0 auto;
             }
           }
         }

         @media screen and (max-width: 900px) {
           justify-content: center;
           margin-bottom: 25px;
         }

         @media screen and (max-width: 600px) {
           display: block;
           margin-bottom: 25px;
         }
       }

       @media screen and (max-width: 400px) {
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
  @media (max-width: 900px) {
    #grid {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
    'text text'
    'photo photo';
    }
  }
}
</style>
<script>
import BaseButton from '../BaseButton'

export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    scrollTo (id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  components: {
    'base-btn': BaseButton
  }
}
</script>
