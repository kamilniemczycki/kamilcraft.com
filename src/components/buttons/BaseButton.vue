<script setup>
defineProps({
  hasIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  isReverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="btn"
    :class="{ 'btn-reverse': isReverse }"
    title="Wyślij wiadomość"
  >
    <font-awesome-icon
      v-if="hasIcon && icon"
      class="icon"
      :icon="icon"
    />
    <slot />
  </button>
</template>

<style lang="scss">
@import 'scss/btn';

.btn {
  @include button($has-icon: true);
}

.btn-reverse {
  @include button(true, true);
}
</style>
