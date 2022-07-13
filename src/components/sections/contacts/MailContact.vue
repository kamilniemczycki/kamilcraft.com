<template>
  <div class="contact_container">
    <div
      v-if="hasMessageError"
      class="message message_error"
    >
      {{ messageError }}
    </div>
    <div
      v-if="hasMessageOkStatus"
      class="message message_ok"
    >
      {{ messageOk }}
    </div>
    <header class="container_head">
      Formularz kontaktowy:
    </header>
    <form
      id="form-point"
      @submit="formSubmit"
    >
      <label
        class="label-info"
        :class="{ 'label-error': isEmailError }"
        for="email"
      >
        E-mail:
      </label>
      <input
        id="email"
        v-model="emailValue"
        class="contact_input"
        :class="{ 'contact_input-error': isEmailError }"
        type="text"
        name="email"
        placeholder="przemek.kowalski@gmail.com"
      >
      <span
        v-if="isEmailError"
        class="error-message"
      >
        E-mail musi być poprawny, np. przemek.kowalski@gmail.com
      </span>
      <label
        class="label-info"
        :class="{ 'label-error': isMessageError }"
        for="message"
      >
        Wiadomość:
      </label>
      <textarea
        id="message"
        v-model="messageValue"
        class="contact_input"
        :class="{ 'contact_input-error': isMessageError }"
        name="message"
        placeholder="Chciałbym zlecić wykonanie strony..."
      />
      <span
        v-if="isMessageError"
        class="error-message"
      >
        Wiadomość musi zawierać przynajmniej 3 znaki!
      </span>
      <label
        class="label-info"
        :class="{ 'label-error': isSenderError }"
        for="sender"
      >
        Podpis nadawcy:
      </label>
      <input
        id="sender"
        v-model="senderValue"
        class="contact_input"
        :class="{ 'contact_input-error': isSenderError }"
        type="text"
        name="sender"
        placeholder="np. Przemek Kowalski"
      >
      <span
        v-if="isSenderError"
        class="error-message"
      >
        Podpis musi zawierać przynajmniej 3 znaki!
      </span>
      <BaseButton
        is-reverse
        :disabled="isButtonDisabled"
      >
        Wyślij
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import BaseButton from '../../buttons/BaseButton'
import { ref, reactive, watch, computed } from 'vue'

function emailValidate (mailObj) {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return mailObj.match(mailFormat)
}

async function postData (url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

const buttonDisabled = ref(false)
const statusError = ref(0)
const emailValue = ref('')
const messageValue = ref('')
const senderValue = ref('')

const messageError = ref('')
const messageOk = ref('')

const errors = reactive({
  email: false,
  message: false,
  sender: false
})

const isButtonDisabled = computed(() => buttonDisabled.value || errors.email || errors.message || errors.sender)
const isEmailError = computed(() => errors.email)
const isMessageError = computed(() => errors.message)
const isSenderError = computed(() => errors.sender)
const hasMessageError = computed(() => messageError.value)
const hasMessageOkStatus = computed(() => messageOk.value && !hasMessageError.value)

watch([statusError, emailValue], ([errorCount, value]) => {
  errors.email = errorCount > 0 && !emailValidate(value)
})

watch([statusError, messageValue], ([errorCount, value]) => {
  errors.message = errorCount > 0 && (value === '' || value.length < 3)
})

watch([statusError, senderValue], ([errorCount, value]) => {
  errors.sender = errorCount > 0 && (value === '' || value.length < 3)
})

function clearErrors() {
  statusError.value = 0
  errors.email = false
  errors.message = false
  errors.sender = false
}

function checkForm() {
  clearErrors()
  if (!emailValidate(emailValue.value)) {
    errors.email = true
    statusError.value++
  }
  if (messageValue.value === '') {
    errors.message = true
    statusError.value++
  }
  if (senderValue.value === '') {
    errors.sender = true
    statusError.value++
  }
}

function formSubmit(event) {
  event.preventDefault()

  checkForm()

  if (statusError.value === 0) {
    console.log('Send!')
    buttonDisabled.value = true
    postData('https://kamilcraft.com/send', {
      email: emailValue.value,
      message: messageValue.value,
      sender: senderValue.value
    }).then(result => {
      if (result.error) {
        messageError.value = result.message
      } else {
        messageOk.value = result.message
        messageValue.value = ''
        emailValue.value = ''
        senderValue.value = ''
      }
      buttonDisabled.value = false
    }).catch(() => {
      messageError.value = 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować później.'
      buttonDisabled.value = false
    })
  }
}
</script>

<style lang="scss" scoped>
@import "scss/media";

.contact_container {
  flex-basis: 500px;

  #form-point {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 97%;
    margin: 0 20px 5px;
  }
}

.container_head {
  padding: 10px;
  line-height: 1.6em;
  font-size: 1.3em;
  font-weight: bold;
}

.contact_container {
  .label-info {
    width: 97%;
    padding-bottom: 5px;
    color: #7a7a7a;
  }

  .error-message {
    width: 97%;
    padding: 5px 0 10px;
    color: #d44950;
  }

  input, textarea {
    width: 97%;
    max-width: 97%;
    border: 0;
    border-bottom: 2px solid #c9c9c9;
    padding: 10px 10px 8px;
    font-size: 1em;
    font-family: var(--font-family);
    line-height: 1.3em;
    margin-bottom: 15px;
    border-radius: 5px;
  }
}

.contact_input::placeholder {
  color: #bdbdbd;
}

.contact_input:focus, .contact_input:focus {
  outline: none;
  border-color: black;
}

textarea.contact_input {
  max-width: 97%;
  min-width: 97%;
  min-height: 150px;
}

input.contact_input-error, textarea.contact_input-error {
  border-color: #d44950;
  color: #d44950;
  margin-bottom: 0;
}

.contact_input-error::placeholder, .contact_input-error::placeholder {
  color: #d7626a;
}

input[disabled].contact_input {
  background-color: #cdcdcd;
  border-color: gray;
  color: black;
}

.message {
  display: none;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
}

.message_ok, .message_error {
  display: block;
}

.message_ok {
  background-color: #4CAF50;
  border: 1px solid #387d3b;
  color: white;
}

.message_error {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}
</style>
