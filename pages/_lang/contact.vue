<template>
<div>
  <div class="page-header">
    <iframe src="https://snazzymaps.com/embed/6150" width="100%" height="430px" style="border:none;"></iframe>
  </div>
  <section class="page-content boundaries">
    <h2>{{ $t('pages.contact') }}</h2>
    <component-address />
    <v-alert v-show="formSuccess" icon="done" success>
      {{ $t('form.successMessage') }}
    </v-alert>
    <div v-show="!formSuccess" class="contact-form">
      <v-card>
      <h4>{{ $t('form.title') }}</h4>
      <form method="POST" v-on:submit.prevent="onSubmit">
        <v-text-field name="name" :label="$t('form.name')" v-model="name" required :rules="[rules.required]"></v-text-field>
        <v-text-field name="email" :label="$t('form.email')" v-model="email" required :rules="[rules.required, rules.email]"></v-text-field>
        <v-text-field name="message" :label="$t('form.message')" counter v-model="message" max="400" multi-line required :rules="[rules.required]"></v-text-field>
        <v-btn type="submit" primary>{{ $t('form.submit') }}</v-btn>
      </form>
      </v-card>
    </div>
  </section>
</div>
</template>

<script>
import address from '~/components/address.vue'
import $ from 'jquery'

export default {
  components: {
    'component-address': address
  },
  head() {
    return {
      title: this.$t('pages.contact')
    }
  },
  data() {
    return {
      name: null,
      message: null,
      email: null,
      rules: {
        required: (value) => (value === null || !!value) || this.$t('form.error.required'),
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (value === null || pattern.test(value)) || this.$t('form.error.invalidEmail')
        }
      },
      formSuccess: false
    }
  },
  methods: {
    onSubmit: function () {
      var self = this
      $.ajax({
        url: 'https://formspree.io/info@santihans.com',
        method: 'POST',
        data: {
          _subject: 'Santihans Inquiry',
          _format: 'plain',
          topic: self.topic,
          name: self.name,
          email: self.email,
          message: self.message
        },
        dataType: 'json'
      }).then(function () {
        self.formSuccess = true
      })
    }
  },
  i18n: {
    messages: {
      en: {
        form: {
          title: 'Contact us',
          name: 'Name',
          email: 'E-mail',
          message: 'Message',
          submit: 'Submit',
          error: {
            required: 'Required',
            invalidEmail: 'Invalid e-mail'
          },
          successMessage: 'Thank you for your message. We\'ll get back to you as soon as possible.'
        }
      },
      de: {
        form: {
          title: 'Kontaktiere uns',
          name: 'Name',
          email: 'Email',
          message: 'Nachricht',
          submit: 'Abschicken',
          error: {
            required: 'Erforderlich',
            invalidEmail: 'Ungültige Email'
          },
          successMessage: 'Vielen Dank für die Nachricht. Wir melden uns so schnell wie möglich.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "contact.scss";
</style>
