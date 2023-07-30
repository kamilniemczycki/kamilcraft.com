<script setup>
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

const props = defineProps({
    source: {
        type: String,
        required: true,
    }
});

function render() {
    return markdown.render(props.source);
}
</script>

<template>
  <div v-html="render()" />
</template>
