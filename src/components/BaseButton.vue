<template>
  <button class="btn" :class="{ reverse: isReverse }">
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
$btn-blue-color: #436DA7;
$btn-gray-color: #4f4f4f;
$hover-btn-color: white;

.btn {
  display: flex;
  min-width: 270px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border: 3px solid $btn-gray-color;
  background-color: transparent;
  color: $btn-gray-color;
  border-radius: 3px;
  font-size: 1.05em;

  .icon {
    margin-right: 10px;
    font-size: 1.3em;
  }

  &:hover {
    background-color: $btn-gray-color;
    color: $hover-btn-color;
  }
}
.reverse {
  background-color: $btn-blue-color;
  border-color: $btn-blue-color;
  color: $hover-btn-color;

  &:hover {
    background-color: transparent;
    color: $btn-blue-color;
  }
}
</style>
