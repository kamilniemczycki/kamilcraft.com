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
    const nodeChildElement = markdown.render(props.source);
    const nodeElement = document.createElement('div');
    nodeElement.innerHTML = nodeChildElement;
    let length = 0;
    let returnText = '';
    nodeElement.querySelectorAll('p').forEach(value => {
        if (length < 351) {
            length += value.innerText.length;
            returnText += value.innerText + ' ';
        } else {
            return;
        }
    });
    return returnText.substring(0, 350).trim();
}
</script>

<template>
  <p v-text="render()" />
</template>
