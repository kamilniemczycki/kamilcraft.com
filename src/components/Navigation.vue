<template>
  <div class="container" :class="{'container-menu-active': clicked}">
    <router-link to="/">
      <div class="logo" @click="linkClicked">Kamil<span class="logo-element">Craft</span></div>
    </router-link>
    <nav class="nav">
      <button class="nav-btn" @click="clickMenu">
        <transition name="btn">
          <font-awesome-icon v-if="!clicked" icon="bars"></font-awesome-icon>
          <font-awesome-icon v-else icon="times"></font-awesome-icon>
        </transition>
      </button>
      <ul class="site-menu" :class="{'menu-clicked': clicked}">
        <li v-for="menuItem in menuItems" :key="menuItem.slug" class="menu-element" @click="linkClicked">
          <router-link :to="menuItem.uri">{{ menuItem.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.btn-enter-active, .btn-leave-active {
  transition: opacity .5s;
}
.btn-enter, .btn-leave-to {
  opacity: 0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;

  div.logo {
    padding: 14px 20px 14px 40px;
    font-family: 'Thasadith', sans-serif;
    font-size: 2.5em;
    color: #5C5C5C;
    background-color: white;

    .logo-element {
      color: #A2CF00;
    }
  }

  &-menu-active {
    background-color: #EFEFEF;
    color: #8D8D8D;

    div.logo {
      background-color: #F6F6F6;
    }
    .nav {
      .nav-btn {
        color: #8D8D8D;
      }
      .site-menu .menu-element a {
        color: #8D8D8D;
      }
    }
  }
}
.nav {
  margin-left: 20px;
  .nav-btn {
    display: none;
    margin: 10px 25px;
    font-size: 2em;
    color: white;
    background: transparent !important;
    border: none;
  }
  .site-menu {
    display: flex;
    list-style: none;

    .menu-element {
      margin-right: 30px;

      a {
        color: #EBEBEB;

        &.router-link-exact-active, &:hover {
          color: #A2CF00;
        }
      }

      &:last-child {
        margin-right: unset;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .nav-btn {
      display: block;
    }
    .site-menu {
      display: none;
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      background-color: white;
      box-shadow: 0 10px 10px rgba(0, 0, 0, .1);

      .menu-element {
        width: 100%;
        padding: 5px 20px;
        text-align: right;
        font-size: 1.8em;
        line-height: 2em;
      }
    }
    .menu-clicked {
      display: block;
    }
  }
}
@media screen and (max-width: 600px) {
  .container {
    justify-content: space-between;
  }
}
</style>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      menuItems: [
        {
          slug: 'start',
          title: 'Start',
          uri: '/'
        },
        {
          slug: 'projects',
          title: 'Projekty',
          uri: '/projects'
        },
        {
          slug: 'about',
          title: 'O mnie',
          uri: '/about'
        },
        {
          slug: 'contact',
          title: 'Kontakt',
          uri: '/contact'
        }
      ],
      clicked: false,
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    changeClickedStatus () {
      this.clicked = !this.clicked
    },
    clickMenu () {
      this.changeClickedStatus()
    },
    linkClicked () {
      if (this.clicked) {
        this.changeClickedStatus()
      }
    }
  }
}
</script>
