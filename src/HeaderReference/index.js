import { ref } from 'vue';

const head = ref(null);
const description = ref(null);

export function defineHeader(headString = null, descriptionArray = null) {
    head.value = headString;
    description.value = descriptionArray;
}

export function setHeaderTitle(value) {
    head.value = value;
}

export function setHeaderDescription(value) {
    description.value = value;
}

export function getHeaderTitle() {
    return head;
}

export function getHeaderDescription() {
    return description;
}

export function clearHeaderTitle() {
    head.value = null;
}

export function clearHeaderDescription() {
    description.value = null;
}
