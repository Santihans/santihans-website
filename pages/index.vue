<template>
  <div id="index">
    <component-wallpaper></component-wallpaper>
    <div class="illustration-webdesign">
      <div class="illustration">
        <img src="/images/webdesign.svg" alt="Illustration">
        <img class="arrow" src="/images/arrow.svg" alt="Illustration">
      </div>
    </div>
    <section id="sectionWebDesign" class="service-webdesign boundaries">
      <h2>{{ $t('webdesign.headline') }}</h2>
      <p class="abstract">{{ $t('webdesign.abstract') }}</p>
      <div class="service-action">
        <nuxt-link v-ripple class="s-btn" :to="localePath('/work')">{{ $t('buttons.showcase') }}</nuxt-link>
      </div>
    </section>

    <div class="illustration-branding"></div>

    <section class="service-branding boundaries">
      <div class="illustration">
        <no-ssr>
          <progressive-img src="/images/branding.svg" alt="Illustration" />
        </no-ssr>
        <component-watch/>
      </div>
      <h2>{{ $t('branding.headline') }}</h2>
      <p class="abstract">{{ $t('branding.abstract') }}</p>
      <div class="service-action">
        <nuxt-link v-ripple class="s-btn" :to="localePath('/work')">{{ $t('buttons.showcase') }}</nuxt-link>
      </div>
    </section>

    <div class="illustration-advertising">
      <component-clouds/>
      <no-ssr>
        <progressive-img class="illustration" src="/images/communications.svg" alt="Illustration" />
      </no-ssr>
      <component-zeppelin/>
    </div>

    <section class="service-advertising boundaries">
      <h2>{{ $t('advertising.headline') }}</h2>
      <p class="abstract">{{ $t('advertising.abstract') }}</p>
      <div class="service-action">
        <nuxt-link v-ripple class="s-btn" :to="localePath('/work')">{{ $t('buttons.showcase') }}</nuxt-link>
      </div>
    </section>
    <contact-us />
  </div>
</template>

<script>
import wallpaper from '~/components/wallpaper.vue'
import watch from '~/components/watch.vue'
import clouds from '~/components/HeaderClouds.vue'
import zeppelin from '~/components/zeppelin.vue'
import ContactUs from '~/components/contactUs.vue'

export default {
  name: 'HomePage',
  components: {
    'component-wallpaper': wallpaper,
    'component-watch': watch,
    'component-clouds': clouds,
    'component-zeppelin': zeppelin,
    ContactUs
  },
  scrollToTop: true,
  head() {
    return {
      title: this.$t('pages.home'),
      meta: { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
    }
  },
  i18n: {
    messages: {
      en: {
        contact: 'Contact us',
        webdesign: {
          headline: 'Web Experiences',
          abstract:
            'We create individual online communication solutions based on JAMstack development architecture. Our websites are fast, accessible and intuitive, with focus on outstanding design and next-level user interfaces.'
        },
        branding: {
          headline: 'Corporate Identity',
          abstract:
            'We develop corporate identity solutions that perfectly represent the values of your organisation. We make sure you leave your customers with a lasting positive impression.'
        },
        advertising: {
          headline: 'Snappy Communications',
          abstract:
            'Spread your message and increase brand awareness! We help you communicate with your target audience by developing new communication assets.'
        }
      },
      de: {
        contact: 'Kontakt',
        webdesign: {
          headline: 'Premium Webseiten',
          abstract:
            'Wir erstellen individuelle Online-Kommunikationslösungen auf Basis der JAMstack-Entwicklungsarchitektur. Unsere Webseiten sind schnell, zugänglich und intuitiv. Der Schwerpunkt liegt auf herausragendem Design und Lösungen für anspruchsvolle Benutzeroberflächen.'
        },
        branding: {
          headline: 'Corporate Identity',
          abstract:
            'Hinterlasse einen bleibenden Eindruck! Wir entwerfen Marken-Identitäten für deine Organisation oder dein Projekt. Schwerpunkt sind schlichte, wiedererkennbare und einzigartige Designs.'
        },
        advertising: {
          headline: 'Bissige Kommunikation',
          abstract:
            'Erreiche deine Kundschaft und steigere die Bekanntheit deiner Marke. Wir erarbeiten individuelle Kommunikationslösungen und Werbekampagnen die bewegen.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
