<template>
  <button class="btn" :class="isReverse ? 'reverse' : ''">
    <i v-if="hasIcon" :class="classIcon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    hasIcon: Boolean,
    classIcon: String,
    isReverse: Boolean
  }
}
</script>

<style lang="scss" scoped>
$btn-color: black;
$hover-btn-color: white;

.btn {
  padding: 10px 15px;
  border: 1px solid #{$btn-color};
  background-color: transparent;
  color: $btn-color;
  border-radius: 0;
  &:hover {
    background-color: $btn-color;
    color: $hover-btn-color;
  }
}
</style>
