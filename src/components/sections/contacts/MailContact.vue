<script setup>
import { ref, reactive, watch, computed } from 'vue';
import BaseButton from '@/components/buttons/BaseButton.vue';

function emailValidate (mailObj) {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return mailObj.match(mailFormat);
}

async function postData (url = '', data = {}) {
  return await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r =>  r.json().then(response => ({ status: r.status, data: response })) );
}

const buttonDisabled = ref(false);
const isError = ref(false);
const email = ref(null);
const message = ref(null);
const sender = ref(null);

const errors = reactive({
  email: null,
  message: null,
  sender: null,
});

const responseMessage = reactive({
  type: null,
  data: null,
});

const isButtonDisabled = computed(() => buttonDisabled.value || errors.email || errors.message || errors.sender);

watch([isError, message], async ([errorStatus, messageValue]) => {
  errors.message = (messageValue !== null || errorStatus) && (messageValue?.length ?? 0) < 3 ? 'Wymanage są przynajmniej 3 znaki.' : null;
});

watch([isError, email], async ([errorStatus, emailValue]) => {
  errors.email = (emailValue !== null || errorStatus) && !emailValidate(emailValue ?? '') ? 'E-mail powinien mieć formę: adam.nowak@gmail.com.' : null;
});

watch([isError, sender], async ([errorStatus, senderValue]) => {
  errors.sender = (senderValue !== null || errorStatus) && (senderValue?.length ?? 0) < 3 ? 'Proszę się przedstawić 😉' : null;
});

function checkForm() {
  isError.value = false;
  responseMessage.type = null;
  responseMessage.data = null;

  if (email.value === null || !emailValidate(email.value)) {
    console.log('email error');
    errors.email = '';
    isError.value = true;
  }
  if (message.value === null) {
    console.log('message error');
    errors.message = '';
    isError.value = true;
  }
  if (sender.value === null) {
    console.log('sender error');
    errors.sender = '';
    isError.value = true;
  }

  if (isError.value) {
    responseMessage.type = 'err';
    responseMessage.data = 'Podane dane są niepoprawne. Sprawdź komunikaty pod polami.';
  }
}

function formSubmit(event) {
  event.preventDefault();

  checkForm();

  if (!isError.value) {
    buttonDisabled.value = true;
    const sendUrl = import.meta.env.VITE_APP_API_URL;
    postData(`${sendUrl}/message`, {
      email: email.value,
      message: message.value,
      sender: sender.value,
    }).then(({ status, data }) => {
      if (status === 200) {
        responseMessage.type = 'ok';
        responseMessage.data = data.message;
      } else if(status === 422) {
        responseMessage.type = 'err';
        responseMessage.data = 'Podane dane są niepoprawne. Sprawdź komunikaty pod polami.';

        errors.email = data.errors?.email[0] ?? null;
        errors.message = data.errors?.message[0] ?? null;
        errors.sender = data.errors?.sender[0] ?? null;
      } else {
        responseMessage.type = 'err';
        responseMessage.data = 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować później.';
      }
      buttonDisabled.value = false;
    }).catch(() => {
      responseMessage.type = 'err';
      responseMessage.data = 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować później.';
      buttonDisabled.value = false;
    });
  }

  scrollTo('#contact-form');
}

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  });
}
</script>

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
        v-if="responseMessage.type === 'err'"
        class="w-full px-2 py-2.5 bg-red-100 text-red-700 text-sm rounded-md"
      >
        {{ responseMessage.data }}
      </div>
      <div
        v-else-if="responseMessage.type === 'ok'"
        class="w-full p-2 bg-green-100 text-green-700 text-sm rounded-md shadow"
      >
        {{ responseMessage.data }}
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
          v-model="message"
          class="w-full max-w-full min-h-[150px] px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ errors.message ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          name="message"
          placeholder="Chciałbym zlecić wykonanie strony..."
        />
        <span
          v-if="errors.message"
          class="text-red-400"
        >
          {{ errors.message }}
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
          v-model="email"
          class="w-full px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ errors.email ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          type="text"
          name="email"
          placeholder="Twój adres e-mail"
        >
        <span
          v-if="errors.email"
          class="text-red-400"
        >
          {{ errors.email }}
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
          v-model="sender"
          class="w-full px-2.5 py-2 border-b-2 border-neutral-300 rounded-md focus:border-neutral-400 hover:border-neutral-500 outline-none"
          :class="[ errors.sender ? 'border-red-400 text-red-400 placeholder-red-300' : 'text-gray-900 placeholder-gray-400' ]"
          type="text"
          name="sender"
        >
        <span
          v-if="errors.sender"
          class="text-red-400"
        >
          {{ errors.sender }}
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

<style lang="scss">
@screen md {
  .contact_container {
    flex-basis: 500px;
  }
}
</style>
