<template>
  <div class="contact_container">
    <div class="message"></div>
    <header class="container_head">Formularz kontaktowy:</header>
    <form id="form-point" @submit="formSubmit">
      <input v-model="emailValue" class="contact_input" type="text" name="email" placeholder="Twój adres e-mail." />
      <textarea v-model="messageValue" class="contact_input" name="message" placeholder="Twoja wiadomość."></textarea>
      <input v-model="senderValue" class="contact_input" type="text" name="sender" placeholder="Twój podpis." />
      <base-btn is-reverse :disabled="buttonDisabled">Wyślij</base-btn>
    </form>
  </div>
</template>

<script>
import BaseButton from '../../BaseButton'

function emailValidate (mailObj) {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return !!mailObj.value.match(mailFormat)
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

export default {
  name: 'MailContact',
  data () {
    return {
      buttonDisabled: false,
      statusError: 0,
      email: {},
      emailValue: '',
      message: {},
      messageValue: '',
      sender: {},
      senderValue: ''
    }
  },
  components: {
    'base-btn': BaseButton
  },
  watch: {
    emailValue (value) {
      if (this.statusError > 0 && emailValidate(this.email)) {
        this.email.classList.remove('contact_input-error')
      }
    },
    messageValue (value) {
      if (this.statusError > 0 && value !== '') {
        this.message.classList.remove('contact_input-error')
      }
    },
    senderValue (value) {
      if (this.statusError > 0 && value !== '') {
        this.sender.classList.remove('contact_input-error')
      }
    }
  },
  methods: {
    clearErrors () {
      this.statusError = 0
      this.email.classList.remove('contact_input-error')
      this.message.classList.remove('contact_input-error')
      this.sender.classList.remove('contact_input-error')
    },
    checkForm () {
      if (!emailValidate(this.email)) {
        this.email.classList.add('contact_input-error')
        this.statusError++
      }
      if (this.message.value === '') {
        this.message.classList.add('contact_input-error')
        this.statusError++
      }
      if (this.sender.value === '') {
        this.sender.classList.add('contact_input-error')
        this.statusError++
      }
    },
    formSubmit (event) {
      event.preventDefault()

      this.email = event.target[0]
      this.message = event.target[1]
      this.sender = event.target[2]

      this.clearErrors()
      this.checkForm()

      const messageElement = document.querySelector('.message')
      messageElement.classList.remove('message_ok', 'message_error')

      if (this.statusError === 0) {
        this.buttonDisabled = true
        postData('/send', {
          email: this.emailValue,
          message: this.messageValue,
          sender: this.senderValue
        }).then(result => {
          messageElement.classList.add(
            result.error ? 'message_error' : 'message_ok'
          )

          messageElement.textContent = result.message
          if (!result.error) {
            this.messageValue = ''
            this.emailValue = ''
            this.senderValue = ''
          }
          this.buttonDisabled = false
        }).catch(() => {
          messageElement.classList.add('message_error')
          messageElement.textContent = 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować później.'
          this.buttonDisabled = false
        })
      }
    }
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

.contact_container input, .contact_container textarea {
  width: 97%;
  max-width: 97%;
  border: 0;
  border-bottom: 2px solid #c9c9c9;
  padding: 10px 10px 8px;
  font-size: 1em;
  font-family: var(--font-family);
  line-height: 1.3em;
  margin-bottom: 10px;
  border-radius: 5px;
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

.contact_input-error, .contact_input-error {
  background-color: #ffc3b0;
  border-color: #ff865f;
  color: #c90000;
}

.contact_input-error::placeholder, .contact_input-error::placeholder {
  color: #c9000094;
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
  background-color: #ffc3b0;
  border: 1px solid #ff865f;
  color: #c90000;
}
</style>
