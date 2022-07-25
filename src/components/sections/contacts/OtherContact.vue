<template>
  <div class="contact_info bg-neutral-100 rounded-md border border-gray-200 max-w-[500px] shadow">
    <header class="info_head">
      Inne formy kontaktu:
    </header>
    <div class="contact_element">
      <img
        class="contact_element_icon"
        src="/assets/img/instagram.jpg"
        alt="Instagram"
      >
      <span
        id="instagram"
        class="contact_element_text"
      >
        <a
          href="https://www.instagram.com/nikcamii/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >Instagram: @NiKCamii</a>
      </span>
    </div>
    <div class="contact_element">
      <img
        class="contact_element_icon"
        src="/assets/img/facebook.jpg"
        alt="Facebook"
      >
      <span
        id="facebook"
        class="contact_element_text"
      >
        <a
          href="https://www.facebook.com/nikcamii/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >Facebook: @NiKCamii</a>
      </span>
    </div>
    <div class="contact_element">
      <img
        class="contact_element_icon"
        src="/assets/img/twitter.jpg"
        alt="Twitter"
      >
      <span
        id="twitter"
        class="contact_element_text"
      >
        <a
          href="https://twitter.com/nikcamii"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >Twitter: @NiKCamii</a>
      </span>
    </div>
    <div class="contact_element">
      <img
        class="contact_element_icon"
        src="/assets/img/gg.png"
        alt="Gadu-Gadu"
      >
      <span
        id="gg"
        class="contact_element_text"
      >GG: 38429969</span>
    </div>
    <div class="contact_element">
      <img
        class="contact_element_icon"
        src="/assets/img/user.jpg"
        alt="E-mail"
      >
      <span
        id="mailto"
        class="contact_element_text"
      >
        <a href="mailto:contact@kamilcraft.com">Email: contact@kamilcraft.com</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/media";

.contact_info {
  flex-basis: 410px;
}

.info_head {
  padding: 10px;
  line-height: 1.6em;
  font-size: 1.3em;
  font-weight: bold;
}

.contact_element {
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

  &_icon {
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    object-fit: contain;
  }

  &_text{
    padding-top: 2px;
    line-height: 1.6em;
    font-size: 1.1em;
    font-weight: bold;
  }
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

#mailto {
  color: #696969;
}

#gg {
  color: #ffa214;
}

@include media-tablet {
  #instagram, #facebook, #twitter, #mailto, #gg {
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
