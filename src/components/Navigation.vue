<template>
  <div id="nav">
    <router-link to="/">
      <img id="nav-logo" alt="KamilCraft.com logo" :src="`${publicPath}assets/logo.png`">
    </router-link>
    <ul id="menu">
      <li class="menu-element"><router-link to="/">Strona główna</router-link></li>
      <li class="menu-element"><router-link to="/projects">Projekty</router-link></li>
      <li class="menu-element"><router-link to="/about">O mnie</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
#nav {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;

  #nav-logo {
    display: block;
    object-fit: cover;
    height: 50px;
  }

  #menu {
    display: flex;
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
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

  }
}
@media (max-width: 600px) {
  #nav {
    justify-content: center;

    #menu {
      display: none;
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
