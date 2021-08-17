<template>
  <section id="about">
    <div class="container">
      <div id="grid">
        <div id="grid-text">
          <h2 class="name">Kamil Niemczycki</h2>
          <div class="tagline">Web Developer</div>
          <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</p>
        </div>
        <div id="grid-photo">
          <figure id="about-photo">
            <img :src="`${publicPath}assets/me.png`" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#about {
  padding: 20px 0;
  background-color: #fafafa !important;
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
     }
     #grid-photo {
       grid-area: photo;
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
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
