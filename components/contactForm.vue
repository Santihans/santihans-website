<template>
  <div class="contactForm">
    <div v-show="formSuccess" class="success">
      <div class="title">{{ $t('form.successMessage.title') }}</div>
      {{ $t('form.successMessage.body') }}
    </div>
    <div v-show="!formSuccess">
      <img class="homer" src="/images/homer.svg" alt="Illustration" />
      <h4>{{ $t('form.title') }}</h4>
      <form method="POST" v-on:submit.prevent="onSubmit">
        <div class="errors" v-if="errors.length">
          <ul>
            <li v-for="(error, i) in errors" :key="i">{{ $t(`${error}`) }}</li>
          </ul>
        </div>
        <label for="name">{{ $t('form.name') }}</label>
        <input id="name" name="name" :label="$t('form.name')" v-model="name" required />
        <label for="email">{{ $t('form.email') }}</label>
        <input id="email" name="email" :label="$t('form.email')" v-model="email" required />
        <label for="message">{{ $t('form.message') }}</label>
        <textarea id="message" name="message" v-model="message" required></textarea>
        <div class="form-action">
          <button type="submit" class="s-btn">{{ $t('form.submit') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {
      name: null,
      message: null,
      email: null,
      errors: [],
      formSuccess: false
    }
  },
  props: {
    subject: {
      type: String,
      default: 'SANTiHANS Inquiry'
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.name || !this.message || !this.email) this.errors.push('form.error.required')
      if (!this.validEmail(this.email)) {
        this.errors.push('form.error.invalidEmail')
      }
      if (!this.errors.length) return true
    },
    validEmail: function (email) {
      /* eslint-disable-next-line */
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    onSubmit: function () {
      if (this.checkForm()) {
        var self = this
        $.ajax({
          url: 'https://jumprock.co/mail/santihans',
          method: 'POST',
          data: {
            subject: self.subject,
            name: self.name,
            email: self.email,
            message: self.message
          },
          dataType: 'json'
        }).then(function () {
          self.formSuccess = true
          self.$emit('success', true)
        })
      }
    }
  },
  i18n: {
    messages: {
      en: {
        form: {
          title: 'Drop us a line',
          name: 'Name',
          email: 'E-mail',
          message: 'Message',
          submit: 'Submit',
          error: {
            required: 'Required',
            invalidEmail: 'Invalid e-mail'
          },
          successMessage: {
            title: 'Thank you for your message.',
            body: 'We\'ll get back to you as soon as possible.'
          }
        }
      },
      de: {
        form: {
          title: 'Schreib uns',
          name: 'Name',
          email: 'Email',
          message: 'Nachricht',
          submit: 'Abschicken',
          error: {
            required: 'Erforderlich',
            invalidEmail: 'Ungültige Email'
          },
          successMessage: {
            title: 'Vielen Dank für die Nachricht.',
            body: 'Wir melden uns so schnell wie möglich.'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.contactForm {
  form {
    .errors {
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;

        li {
          background-color: rgb(197, 23, 23);
          color: white;
          margin-bottom: 0.5em;
          padding: 12px;
        }
      }
    }
    label {
      display: block;
      text-transform: uppercase;
      margin-bottom: 0.3em;
      font-size: 0.9em;
    }
    input,
    textarea {
      border: 1px solid mix($colorSubtle, $colorBg);
      display: block;
      line-height: 1.3;
      font-size: 1em;
      max-width: 100%;
      min-width: 100%;
      margin-bottom: 1em;
      padding: 0.5em;

      &:focus {
        outline-color: $colorTurquoise;
      }
    }
    textarea {
      padding: 0.625em;
      resize: vertical;
    }
  }
  .form-action {
    display: flex;
    justify-content: flex-end;
  }

  .homer {
    width: 70px;
    margin-left: auto;
    margin-bottom: -50px;
    @media (min-width: $breakpointMini) {
      width: 100px;
    }
  }

  .success {
    background-color: $colorTurquoise;
    color: white;
    padding: 24px;
    text-align: center;

    .title {
      font-weight: bold;
      font-size: 1.1em;
    }
  }
}
</style>
