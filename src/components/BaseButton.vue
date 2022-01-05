<template>
  <button class="btn" :class="{ 'btn-reverse': isReverse }">
    <font-awesome-icon class="icon" v-if="hasIcon" :icon="icon"/>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    hasIcon: Boolean,
    icon: String,
    isReverse: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "scss/_btn";

.btn {
  @include button($has-icon: true);
}

.btn-reverse {
  @include button(true, true);
}
</style>
