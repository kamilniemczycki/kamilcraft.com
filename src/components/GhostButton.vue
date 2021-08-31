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
$btn-gray-color: #4f4f4f;

.btn {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: transparent;
  color: $btn-gray-color;
  font-size: 1.2em;
  border: unset;

  .icon {
    margin-right: 10px;
    font-size: 1.3em;
  }

  &:hover {
    &::after {
      width: 98%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 30%;
    height: 2px;
    background-color: $btn-gray-color;
    transform: translateY(2px);
    transition: width .3s linear;
  }
}
</style>
