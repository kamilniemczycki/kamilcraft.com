<script setup>
import MailContact from '@/components/sections/contacts/MailContact.vue';
import OtherContact from '@/components/sections/contacts/OtherContact.vue';
</script>

<template>
  <section class="flex flex-col px-3 py-6 md:flex-row items-start justify-center mx-auto gap-5">
    <MailContact />
    <OtherContact />
  </section>
</template>
