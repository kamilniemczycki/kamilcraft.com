<template>
  <div class="container">
    <router-link to="/">
      <div class="logo">Kamil<span class="logo-element">Craft</span></div>
    </router-link>
    <nav class="nav">
      <ul class="site-menu">
        <li class="menu-element">
          <router-link to="/">Start</router-link>
        </li>
        <li class="menu-element">
          <router-link to="/projects">Projekty</router-link>
        </li>
        <li class="menu-element">
          <router-link to="/about">O mnie</router-link>
        </li>
        <li class="menu-element">
          <router-link to="/contact">Kontakt</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
}
.nav {
  margin-left: 20px;
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
