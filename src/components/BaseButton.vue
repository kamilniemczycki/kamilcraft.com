<template>
  <button class="btn" :class="isReverse ? 'reverse' : ''">
    <font-awesome-icon class="icon" if="hasIcon" :icon="icon"/>
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
$btn-color: black;
$hover-btn-color: white;

.btn {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #{$btn-color};
  background-color: transparent;
  color: $btn-color;
  border-radius: 0;

  .icon {
    margin-right: 5px;
    font-size: 1.5em;
  }

  &:hover {
    background-color: $btn-color;
    color: $hover-btn-color;
  }
}
</style>
