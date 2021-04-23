<template>
  <section id="about">
    <h1>O mnie:</h1>
    <div id="grid">
      <div id="grid-text">
        <p>Nazywam się <strong>Kamil Niemczycki</strong>, jestem studentem kierunku <strong>Informatyka</strong> o specjalności Programowanie Aplikacji Mobilnych i Internetowych.</p>
        <p>Swoją przygodę w internecie rozpocząłem od nagrywania poradników, które umieszczałem na moim starym kanale youtube Moje Poradniki (wcześniej Niemczycki12). Z czasem zacząłem odczuwać potrzebę wypowiedzenia się, co spowodowało, że utworzyłem drugi kanał NiKCamii (wcześniej KamilNiemczycki), który był miejscem gdzie dodawałem Vlogi.</p>
      </div>
      <div id="grid-photo">
        <figure id="about-photo">
          <img :src="`${publicPath}assets/me.png`" />
        </figure>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
h1 {
  font-size: 1.6em;
  margin: 30px 0 20px;
}
#about {
  max-width: 1000px;
  margin: 0 auto;
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

    p {
      font-size: 1.1em;
      line-height: 1.4em;
      padding-bottom: 10px;
    }
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

@media (max-width: 900px) {
  #grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'text text'
    'photo photo';
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
