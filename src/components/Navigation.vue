<template>
  <div id="nav">
    <img id="nav-logo" alt="KamilCraft.com logo" :src="`${publicPath}assets/logo.png`">
    <ul id="menu">
      <li class="menu-element"><router-link to="/">Strona główna</router-link></li>
      <li class="menu-element"><router-link to="/projects">Projekty</router-link></li>
      <li class="menu-element"><router-link to="/about">O mnie</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;

  #nav-logo {
    object-fit: cover;
    height: 50px;
  }

  #menu {
    display: flex;
    list-style: none;
    .menu-element {
      display: block;
      padding: 0 10px;
      &:hover {
        background: rgba(0, 0 , 0, .1);
      }
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 50px;

    &.router-link-exact-active {
       color: #42b983;
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
