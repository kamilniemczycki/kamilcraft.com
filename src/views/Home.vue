<template>
  <div class="home">
    <img alt="KamilCraft.com logo" src="https://kamilcraft.com/assets/img/logo.png">
    <HelloWorld msg="Witam serdecznie 🤗"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HomePageElement.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
