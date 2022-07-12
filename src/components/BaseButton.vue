<template>
  <button
    class="btn"
    :class="{ 'btn-reverse': isReverse }"
  >
    <font-awesome-icon
      v-if="hasIcon && icon"
      class="icon"
      :icon="icon"
    />
    <span><slot /></span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  hasIcon: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  isReverse: {
    type: Boolean,
    default: false
  }
})
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
