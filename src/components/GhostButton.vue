<template>
  <button class="btn">
    <font-awesome-icon class="icon" v-if="hasIcon" :icon="icon"/>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'GhostButton',
  props: {
    hasIcon: {
      type: Boolean,
      default: false
    },
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import "scss/btn";

.btn {
  @include ghost-button();
}
</style>
