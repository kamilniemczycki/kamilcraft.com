<template>
  <section id="about">
    <h1>O mnie:</h1>
    <div id="grid">
      <div id="grid-text">
        <p>Siemandero tutaj Kamil Niemczycki</p>
        <p>Lubię programować itp.</p>
      </div>
      <div id="grid-photo">
        <figure>
          <img :src="`${publicPath}assets/me.png`" />
        </figure>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#about {
  max-width: 1000px;
  margin: 0 auto;
}
#grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'text text photo';
  align-items: center;
  #grid-text {
    grid-area: text;
  }
  #grid-photo {
    grid-area: photo;
  }
  figure {
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
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
