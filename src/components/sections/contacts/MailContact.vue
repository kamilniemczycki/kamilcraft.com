<template>
  <div
    id="contact-form"
    class="contact_container w-full bg-neutral-100 rounded-md border border-gray-200 md:max-w-[500px] p-2 shadow"
  >
    <header class="mb-1.5">
      <h3 class="text-xl">
        Formularz kontaktowy
      </h3>
    </header>
    <form
      class="flex flex-col gap-3 justify-start items-start"
      @submit="formSubmit"
    >
      <div
        v-if="hasMessageError"
        class="w-full p-2 bg-red-200 text-red-500 text-sm border border-red-300 rounded-md"
      >
        {{ messageError }}
      </div>
      <div
        v-else-if="hasMessageOkStatus"
        class="w-full p-2 bg-[#27ae60] text-white text-sm border border-lime-600 rounded-md shadow"
      >
        {{ messageOk }}
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label
          class="text-gray-500"
          for="message"
        >
          W czym mogę pomóc?
        </label>
        <textarea
          id="message"
          v-model="messageValue"
          class="w-full max-w-full min-h-[150px] px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ isMessageError ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          name="message"
          placeholder="Chciałbym zlecić wykonanie strony..."
        />
        <span
          v-if="isMessageError"
          class="text-red-400"
        >
          Wiadomość musi zawierać przynajmniej 3 znaki!
        </span>
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label
          class="text-gray-500"
          for="email"
        >
          Gdzie mam odesłać odpowiedź?
        </label>
        <input
          id="email"
          v-model="emailValue"
          class="w-full px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ isEmailError ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          type="text"
          name="email"
          placeholder="Twój adres e-mail"
        >
        <span
          v-if="isEmailError"
          class="text-red-400"
        >
          E-mail musi być poprawny, np. przemek.kowalski@gmail.com
        </span>
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label
          class="text-gray-500"
          for="sender"
        >
          Podpis
        </label>
        <input
          id="sender"
          v-model="senderValue"
          class="w-full px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ isSenderError ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          type="text"
          name="sender"
        >
        <span
          v-if="isSenderError"
          class="text-red-400"
        >
          Podpis musi zawierać przynajmniej 3 znaki!
        </span>
      </div>
      <BaseButton
        is-reverse
        class="py-1 w-full"
        :disabled="isButtonDisabled"
      >
        Wyślij
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import BaseButton from '@/components/buttons/BaseButton.vue'
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

  scrollTo('#contact-form')
}

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
@screen md {
  .contact_container {
    flex-basis: 500px;
  }
}
</style>
