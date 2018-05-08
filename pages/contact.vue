<template>
  <div id="contact">
    <page-header :title="$t('pages.contact')" backgroundImage="header-contact.svg">
      <component-ufo />
    </page-header>

    <section class="page-content boundaries">
      <div class="flex">
        <div class="flex-contact">
          <div class="address">
            <component-address />
          </div>
          <component-contact-form />
        </div>
        <div class="flex-map">
          <spinner/>
          <iframe src="https://snazzymaps.com/embed/6150"></iframe>
          <a class="s-btn s-btn-pink" href="https://goo.gl/maps/3CeEYuYSEzR2" rel="noopener" target="_blank">Open Google Maps</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import address from '~/components/contactAddress.vue'
import contactForm from '~/components/contactForm.vue'
import PageHeader from '~/components/PageHeader.vue'
import ufo from '~/components/ufo.vue'
import Spinner from '~/components/Spinner.vue'

export default {
  components: {
    'component-address': address,
    'component-contact-form': contactForm,
    'component-ufo': ufo,
    PageHeader,
    Spinner
  },
  head() {
    return {
      title: this.$t('pages.contact'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.description') }
      ]
    }
  },
  i18n: {
    messages: {
      en: {
        meta: {
          description:
            'We are friendly. Get in touch and ask for advice, a website checkup, a nonbinding estimate or just to say hi!'
        }
      },
      de: {
        meta: {
          description:
            'Wir sind freundlich. Nehmen Sie Kontakt auf und fragen Sie nach Rat, einem Website-Checkup, einem unverbindlichen Kostenvoranschlag oder einfach nur um Hallo zu sagen!'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'contact.scss';
</style>
