<template>
  <header id="header">
    <router-link to="/">
      <img id="nav-logo" alt="KamilCraft.com logo" :src="`${publicPath}assets/logo.png`">
    </router-link>
    <nav id="navigation">
      <ul id="menu">
        <li class="menu-element"><router-link to="/">Strona główna</router-link></li>
        <li class="menu-element"><router-link to="/projects">Projekty</router-link></li>
        <li class="menu-element"><router-link to="/about">O mnie</router-link></li>
        <li class="menu-element"><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
#header {
  width: 250px;
  height: 100vh;
  background-color: #4f4f4f !important;
  #nav-logo {
    display: block;
    width: 250px;
    padding: 8px 0;
    background-color: #fafafa !important;
  }
  #navigation {
    #menu {
      list-style: none;
      margin: 0;
      .menu-element {
        display: block;
        padding: 0 10px;

        &:hover {
          background: rgba(0, 0 , 0, .1);
        }
      }

      a {
        display: block;
        line-height: 50px;
        font-weight: bold;
        color: #dcdcdc;

        &.router-link-exact-active {
          color: white;
        }
      }

    }
  }
}
</style>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
