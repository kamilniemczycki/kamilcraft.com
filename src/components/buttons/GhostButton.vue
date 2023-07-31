<script setup>
defineProps({
  hasIcon: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <button class="btn">
    <font-awesome-icon
      v-if="hasIcon && icon"
      class="icon"
      :icon="icon"
    />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import 'scss/btn';

.btn {
  @include ghost-button();
}
</style>
