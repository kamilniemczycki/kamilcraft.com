<template>
  <div id="nav">
    <img alt="KamilCraft.com logo" :src="`${publicPath}assets/logo.png`">
    <ul>
      <li><router-link to="/">Strona główna</router-link></li>
      <li><router-link to="/projects">Projekty</router-link></li>
      <li><router-link to="/about">O mnie</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    li {
      display: block;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;

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
