<template>
  <button class="btn">
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
  }
})
</script>

<style lang="scss" scoped>
@import "scss/btn";

.btn {
  @include ghost-button();
}
</style>
