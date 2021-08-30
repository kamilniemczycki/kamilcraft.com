<template>
  <div class="contact-container" style="flex-basis: 410px">
    <header class="head">Inne formy kontaktu:</header>
    <div class="contact-element">
      <img class="contact-element-icon" src="/assets/img/instagram.jpg" />
      <span id="instagram"><a href="https://www.instagram.com/nikcamii/" target="_blank">Instagram: @NiKCamii</a></span>
    </div>
    <div class="contact-element">
      <img class="contact-element-icon" src="/assets/img/facebook.jpg" />
      <span id="facebook"><a href="https://www.facebook.com/nikcamii/" target="_blank">Facebook: @NiKCamii</a></span>
    </div>
    <div class="contact-element">
      <img class="contact-element-icon" src="/assets/img/twitter.jpg" />
      <span id="twitter"><a href="https://twitter.com/nikcamii" target="_blank">Twitter: @NiKCamii</a></span>
    </div>
    <div class="contact-element">
      <img class="contact-element-icon" src="/assets/img/gg.png" />
      <span id="gg">GG: 38429969</span>
    </div>
    <div class="contact-element">
      <img class="contact-element-icon" src="/assets/img/user.jpg" />
      <span id="email"><a href="mailto:contact@kamilcraft.com">Email: contact@kamilcraft.com</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherContact'
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
.contact-element {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 5px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      -webkit-text-fill-color: #444444;
      color: #444444;
      text-decoration: underline;
    }
  }
}

.contact-element-icon {
  border-radius: 50%;
  border: 1px solid #e2e2e2;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: contain;
}

#instagram, #facebook, #twitter, #email, #gg {
  padding-top: 2px;
  line-height: 1.6em;
  font-size: 1.1em;
  font-weight: bold;
}

#instagram {
  background: linear-gradient(120deg, #e99311, #8738b8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#facebook {
  color: #4267b2;
}

#twitter {
  color: #5eaade;
}

#email {
  color: #696969;
}

#gg {
  color: #ffa214;
}
</style>
