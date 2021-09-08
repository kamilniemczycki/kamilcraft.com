<template>
  <div class="experiences">
    <div class="container">
      <h2>Wykorzystywane technologie</h2>
      <p>
        Programowaniem stron internetowych zajmuję się najmłodszych lat, czyli od 2011 roku. Pierwsze projekty były
        proste i najczęściej na użytek własny. Jednakże, doświadczenie zebrane przez lata pomogło mi wyselekcjonować
        technologie, które wspomagają pisanie i rozwijanie oprogramowania.
      </p>
      <div class="skills">
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-php" :icon="['fab', 'php']" title="Ikona PHP" />
              <font-awesome-icon class="icon-laravel" :icon="['fab', 'laravel']" title="Ikona Laravel" />
            </div>
            <h3>{{ php.header }}</h3>
          </header>
          <p v-if="php.showMore || php.description.length < 255">{{ php.description }}</p>
          <p v-else>{{ php.description.substr(0, 255) }}... <a @click="() => { php.showMore = true }">Więcej</a></p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-js" :icon="['fab', 'js-square']" />
            </div>
            <h3>{{ javascript.header }}</h3>
          </header>
          <p v-if="javascript.showMore || javascript.description.length < 255">{{ javascript.description }}</p>
          <p v-else>{{ javascript.description.substr(0, 255) }}... <a @click="() => { javascript.showMore = true }">Więcej</a></p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-vue" :icon="['fab', 'vuejs']" />
            </div>
            <h3>{{ vue.header }}</h3>
          </header>
          <p v-if="vue.showMore || vue.description.length < 255">{{ vue.description }}</p>
          <p v-else>{{ vue.description.substr(0, 255) }}... <a @click="() => { vue.showMore = true }">Więcej</a></p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-html5" :icon="['fab', 'html5']" />
              <font-awesome-icon class="icon-css3" :icon="['fab', 'css3-alt']" />
            </div>
            <h3>HTML & CSS</h3>
          </header>
          <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-node" :icon="['fab', 'node']" />
            </div>
            <h3>Node.js</h3>
          </header>
          <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-sass" :icon="['fab', 'sass']" />
            </div>
            <h3>Sass</h3>
          </header>
          <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experiences',
  data () {
    return {
      php: {
        header: 'PHP & Laravel',
        showMore: false,
        description: `PHP wraz z frameworkiem Laravel wykorzystuję do tworzenia nowych projektów. Laravel znacznie
        przyspiesza pisanie części backendowej, odciążając programistę od pisania skomplikownych filtrów i monotonnych
        walidacji przyjmowanych danych od użytkowników. Jednakże, choć dobrze pracuje mi się w środowisku Laravel w
        miarę możliwości staram się pisać kod w samym PHP z wykorzystaniem bibliotek i paczek autorskich.`
      },
      javascript: {
        header: 'JavaScript Vanilla',
        showMore: false,
        description: `JavaScript wykorzystuję głównie do logiki frontendowej jak i pisania kodu wykonywalnego po stronie
        przeglądarki internetowej. Wykorzystując możliwości reaktywnych frameworków mogę przyspieszyć pisanie UI.`
      },
      vue: {
        header: 'Vue',
        showMore: false,
        description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
        wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
        przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
      }
    }
  }
}
</script>

<style lang="scss">
.experiences {
  .container {
    padding-top: 45px;
    padding-bottom: 45px;

    .skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 20px;
      margin-top: 15px;

      .skill-group {
        background-color: #fafafa;
        padding: 15px;
        border-radius: 5px;

        .tech-icons {
          font-size: 1.8em;
          margin-bottom: 3px;

          & > *[class|=icon] {
            margin-right: 10px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
        h3 {
          font-size: 1.2em;
          line-height: 1.6em;
          font-weight: bold;
        }
        .skill-list {
          margin-block: auto;
          padding-inline: inherit;
          margin-left: 5px;
          list-style-type: initial;
        }
        p {
          font-size: .9em;

          a {
            color: #8D8D8D;
            cursor: pointer;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, .03);
        }
      }

      @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
.icon-js {
  color: #F1DE4F;
}
.icon-php {
  color: #777bb3;
}
.icon-laravel {
  color: #FF2D20;
}
.icon-vue {
  color: #64B687;
}
.icon-html5 {
  color: #DE6E3C;
}
.icon-node {
  color: #64B687;
}
.icon-css3 {
  color: #53A7DC;
}
.icon-sass {
  color: #BF6B97;
}
</style>
