<template>
  <div class="contact-container" style="flex-basis: 500px;">
    <div class="message-status"></div>
    <header class="head">Formularz kontaktowy:</header>
    <form id="form-point" @submit="formSubmit">
      <input v-model="emailValue" class="contact-input" type="text" name="email" placeholder="Twój adres e-mail." />
      <textarea v-model="messageValue" class="contact-input" name="message" placeholder="Twoja wiadomość."></textarea>
      <input v-model="senderValue" class="contact-input" type="text" name="sender" placeholder="Twój podpis." />
      <input :disabled="buttonDisabled" class="contact-input" type="submit" value="Wyślij"/>
    </form>
  </div>
</template>

<script>
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
  watch: {
    emailValue (value) {
      if (this.statusError > 0 && emailValidate(this.email)) {
        this.email.classList.remove('error')
      }
    },
    messageValue (value) {
      if (this.statusError > 0 && value !== '') {
        this.message.classList.remove('error')
      }
    },
    senderValue (value) {
      if (this.statusError > 0 && value !== '') {
        this.sender.classList.remove('error')
      }
    }
  },
  methods: {
    clearErrors () {
      this.statusError = 0
      this.email.classList.remove('error')
      this.message.classList.remove('error')
      this.sender.classList.remove('error')
    },
    checkForm () {
      if (!emailValidate(this.email)) {
        this.email.classList.add('error')
        this.statusError++
      }
      if (this.message.value === '') {
        this.message.classList.add('error')
        this.statusError++
      }
      if (this.sender.value === '') {
        this.sender.classList.add('error')
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

      const messageElement = document.querySelector('.message-status')
      messageElement.classList.remove('message-status__ok', 'message-status__error')

      if (this.statusError === 0) {
        this.buttonDisabled = true
        postData('/send', {
          email: this.emailValue,
          message: this.messageValue,
          sender: this.senderValue
        }).then(result => {
          messageElement.classList.add(
            result.error ? 'message-status__error' : 'message-status__ok'
          )

          messageElement.textContent = result.message
          if (!result.error) {
            this.messageValue = ''
            this.emailValue = ''
            this.senderValue = ''
          }
          this.buttonDisabled = false
        }).catch(() => {
          messageElement.classList.add('message-status__error')
          messageElement.textContent = 'Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować później.'
          this.buttonDisabled = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  margin: 10px;
  max-width: 500px;
  background-color: #eaeaea;
  border: 2px solid #dadada;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);

  header.head {
    padding: 10px;
    line-height: 1.6em;
    font-size: 1.3em;
    font-weight: bold;
  }

  form#form-point {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.contact-container input, .contact-container textarea {
  width: 97%;
  border: 0;
  border-bottom: 2px solid #c9c9c9;
  padding: 10px 10px 8px;
  font-size: 1em;
  font-family: var(--font-family);
  line-height: 1.3em;
  margin-bottom: 10px;
  border-radius: 5px;
}
input.contact-input:focus, textarea.contact-input:focus {
  outline: none;
  border-color: black;
}
textarea.contact-input {
  max-width: 97%;
  min-width: 97%;
  min-height: 150px;
}
input.error, textarea.error {
  background-color: #ffc3b0;
  border-color: #ff865f;
  color: #c90000;
}
input.error::placeholder, textarea.error::placeholder {
  color: #c9000094;
}
input[type="submit"].contact-input {
  appearance: unset;
  color: white;
  background-color: #4CAF50;
  border-bottom: 2px solid #387d3b;
}
input[type="submit"].contact-input:hover {
  box-shadow: 0 0 8px rgba(0,0,0,.4);
}
input[disabled].contact-input {
  background-color: #cdcdcd;
  border-color: gray;
  color: black;
}
.message-status {
  display: none;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
}
.message-status__ok, .message-status__error {
  display: block;
}
.message-status__ok {
  background-color: #4CAF50;
  border: 1px solid #387d3b;
  color: white;
}
.message-status__error {
  background-color: #ffc3b0;
  border: 1px solid #ff865f;
  color: #c90000;
}
@media screen and (max-width: 800px) {
  .contact-elements {
    display: block;
    width: auto;
  }
  #instagram, #facebook, #twitter, #email, #gg {
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
