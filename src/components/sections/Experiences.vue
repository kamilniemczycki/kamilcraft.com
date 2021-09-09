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
        <div v-for="(skill, key) in list" :key="key" class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon
                v-for="(icon, keyIcon) in skill.icons"
                :key="keyIcon" :class="icon.class"
                :icon="['fab', icon.name]"
                :title="icon.title" />
            </div>
            <h3>{{ skill.header }}</h3>
          </header>
          <p v-if="skill.showMore || skill.description.length < 200">{{ skill.description }}</p>
          <p v-else>{{ parseText(skill.description) }}... <a @click="changeMoreStatus(skill)">Więcej</a></p>
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
      list: []
    }
  },
  mounted () {
    this.list = [
      {
        icons: [
          {
            class: 'icon-php',
            name: 'php',
            title: 'Ikona PHP'
          },
          {
            class: 'icon-laravel',
            name: 'laravel',
            title: 'Ikona Laravel'
          }
        ],
        header: 'PHP & Laravel',
        showMore: false,
        description: `PHP wraz z frameworkiem Laravel wykorzystuję do tworzenia nowych projektów. Laravel znacznie
        przyspiesza pisanie części backendowej, odciążając programistę od pisania skomplikownych filtrów i monotonnych
        walidacji przyjmowanych danych od użytkowników. Jednakże, choć dobrze pracuje mi się w środowisku Laravel
        w miarę możliwości staram się pisać kod w samym PHP z wykorzystaniem bibliotek i paczek autorskich.`
      },
      {
        icons: [
          {
            class: 'icon-js',
            name: 'js-square',
            title: 'Ikona JavaScript'
          }
        ],
        header: 'JavaScript Vanilla',
        showMore: false,
        description: `JavaScript wykorzystuję głównie do logiki frontendowej jak i pisania kodu wykonywalnego po stronie
        przeglądarki internetowej. Wykorzystując możliwości reaktywnych frameworków mogę przyspieszyć pisanie UI.`
      },
      {
        icons: [
          {
            class: 'icon-vue',
            name: 'vuejs',
            title: 'Ikona Vue'
          }
        ],
        header: 'Vue',
        showMore: false,
        description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
        wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
        przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
      },
      {
        icons: [
          {
            class: 'icon-html5',
            name: 'html5',
            title: 'Ikona HTML5'
          },
          {
            class: 'icon-css3',
            name: 'css3-alt',
            title: 'Ikona CSS3'
          }
        ],
        header: 'HTML & CSS',
        showMore: false,
        description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
        wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
        przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
      },
      {
        icons: [
          {
            class: 'icon-node',
            name: 'node',
            title: 'Ikona Node.js'
          }
        ],
        header: 'Node.js',
        showMore: false,
        description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
        wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
        przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
      },
      {
        icons: [
          {
            class: 'icon-sass',
            name: 'sass',
            title: 'Ikona Sass'
          }
        ],
        header: 'Sass',
        showMore: false,
        description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
        wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
        przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
      }
    ]
  },
  methods: {
    parseText (text) {
      let shortText = text.substr(0, 200)
      if (shortText.slice(-1) === ' ') {
        shortText = text.substr(0, 199)
      }
      return shortText
    },
    changeMoreStatus (skill) {
      skill.showMore = !skill.showMore
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

          & > svg[class*='icon'] {
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
