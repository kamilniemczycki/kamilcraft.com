<template>
  <div id="nav">
    <router-link to="/">Strona główna</router-link>
    <router-link to="/projects">Projekty</router-link>
    <router-link to="/about">O mnie</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    padding: 0 5px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
       color: #42b983;
    }
  }
}
</style>
