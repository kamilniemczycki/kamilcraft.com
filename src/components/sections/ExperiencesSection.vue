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
        <div
          v-for="(skill, skillKey) in list"
          :key="skillKey"
          class="skill-group"
        >
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon
                v-for="(icon, iconKey) in skill.icons"
                :key="iconKey"
                :class="icon.class"
                :icon="['fab', icon.name]"
                :alt="icon.alt"
                :title="icon.title"
              />
            </div>
            <h3>{{ skill.header }}</h3>
          </header>
          <p v-if="skill.showMore.value || skill.description.length < 200">
            {{ skill.description }}
          </p>
          <p v-else>
            {{ parseText(skill.description) }}... <a @click="changeMoreStatus(skill)">Więcej</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let list = [
  {
    icons: [
      {
        class: 'icon-php',
        name: 'php',
        alt: 'Ikona przedstawiająca język PHP',
        title: 'Ikona PHP'
      },
      {
        class: 'icon-laravel',
        name: 'laravel',
        alt: 'Ikona przedstawiająca framework Laravel',
        title: 'Ikona Laravel'
      }
    ],
    header: 'PHP & Laravel',
    showMore: ref(false),
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
        alt: 'Ikona przedstawiająca język JavaScript',
        title: 'Ikona JavaScript'
      }
    ],
    header: 'JavaScript Vanilla',
    showMore: ref(false),
    description: `JavaScript wykorzystuję głównie do logiki frontendowej jak i pisania kodu wykonywalnego po stronie
      przeglądarki internetowej. Wykorzystując możliwości reaktywnych frameworków mogę przyspieszyć pisanie UI.`
  },
  {
    icons: [
      {
        class: 'icon-vue',
        name: 'vuejs',
        alt: 'Ikona przedstawiająca framework Vue.js',
        title: 'Ikona Vue.js'
      }
    ],
    header: 'Vue',
    showMore: ref(false),
    description: `Framework ten wspomaga mnie w pisaniu aplikacji frontendowej. Przyspiesza tworzenie warstwy
      wizualnej, obsługę interakcji z użytkownikiem i bindowanie zdefiniowanych pól, które są odpowiednio renderowane
      przez przeglądarkę. To wszystko, umożliwia łatwe łączenie CSS i HTML z logiką i otrzymanymi danymi z API.`
  },
  {
    icons: [
      {
        class: 'icon-html5',
        name: 'html5',
        alt: 'Ikona przedstawiająca HTML5',
        title: 'Ikona HTML5'
      },
      {
        class: 'icon-css3',
        name: 'css3-alt',
        alt: 'Ikona przedstawiająca CSS3',
        title: 'Ikona CSS3'
      }
    ],
    header: 'HTML & CSS',
    showMore: ref(false),
    description: `HTML i CSS to już nieodłączne technologie, które w łatwy sposób umożliwiają nadanie wizualnej
      spójności dla treści, obrazów lub ułożenia elementów. Nie raz, odpowednie zaprojektowanie interfejsu użytkownika
      przyspiesza integrację z naszą stroną/sklepem. Ma to przełożenie na zyski dla obu stron - firmy (finanse)
      i klienta (czas).`
  },
  {
    icons: [
      {
        class: 'icon-node',
        name: 'node',
        alt: 'Ikona przedstawiająca Node.js',
        title: 'Ikona Node.js'
      }
    ],
    header: 'Node.js',
    showMore: ref(false),
    description: `Node jest wieloplatformowym środowiskiem uruchomieniowym, umożliwiającym uruchomienie kodu
      JavaScript po stronie backendowej. Jest to bardzo przyjemny język, który ułatwia projektowanie logiki biznesowej
      aplikacji, dla mniej wymagających serwisów pod względem analizy i przetwarzania danych.`
  },
  {
    icons: [
      {
        class: 'icon-sass',
        name: 'sass',
        alt: 'Ikona przedstawiająca Sass',
        title: 'Ikona Sass'
      }
    ],
    header: 'Sass',
    showMore: ref(false),
    description: `Sass zwiększa czytelność kodu dla programisty. Zawiera abstrakcje znane z języków obiektowych,
      przy czym ogranicza powtarzalność i umożliwia optymalizację kodu. Kompilacja napisanego stylu w Sass jest
      przekształcana do formy czytelnej dla silnika graficznego przeglądarki, co przyspiesza proces generowania strony.`
  }
]

function parseText(text) {
  let shortText = text.substr(0, 200)
  if (shortText.slice(-1) === ' ') {
    shortText = text.substr(0, 199)
  }
  return shortText
}

function changeMoreStatus(skill) {
  skill.showMore.value = !skill.showMore.value
}
</script>

<style lang="scss">
@import "scss/media";

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

      @include media-small {
        grid-template-columns: repeat(3, 1fr);
      }
      @include media-tablet {
        grid-template-columns: repeat(2, 1fr);
      }
      @include media-mobile {
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
