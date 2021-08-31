<template>
  <div class="experiences">
    <div class="container">
      <h2>Wykorzystywane technologie</h2>
      <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
      <div class="skills">
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-php" :icon="['fab', 'php']" title="Ikona PHP" />
              <font-awesome-icon class="icon-laravel" :icon="['fab', 'laravel']" title="Ikona Laravel" />
            </div>
            <h3>PHP & Laravel</h3>
          </header>
          <ul class="skill-list">
            <li>One</li>
            <li>Two</li>
          </ul>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-js" :icon="['fab', 'js-square']" />
            </div>
            <h3>JavaScript Vanilla</h3>
          </header>
          <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
        </div>
        <div class="skill-group">
          <header class="skill-header">
            <div class="tech-icons">
              <font-awesome-icon class="icon-vue" :icon="['fab', 'vuejs']" />
            </div>
            <h3>Vue</h3>
          </header>
          <p>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
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
  name: 'Experiences'
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
      margin-top: 35px;

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
