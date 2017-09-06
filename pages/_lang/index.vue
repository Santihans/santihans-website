<template>
<div id="index">
  <component-wallpaper></component-wallpaper>
  <div class="illustration-webdesign">
    <img src="~assets/images/webdesign.svg" alt="Illustration">
  </div>
  <section id="sectionWebDesign" class="service-webdesign boundaries">
    <h2>{{ $t('webdesign.headline') }}</h2>
    <p class="abstract">{{ $t('webdesign.abstract') }}</p>
    <div>
      <v-btn large primary :to="localePath('/services')">{{ $t('more') }}</v-btn>
    </div>
    <div>
      <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
    </div>
  </section>

  <div class="illustration-branding"></div>

  <section class="service-branding boundaries">
    <img class="illustration" src="~assets/images/branding.svg" alt="Illustration">
    <h2>{{ $t('branding.headline') }}</h2>
    <p class="abstract">{{ $t('branding.abstract') }}</p>
    <div>
      <v-btn large primary :to="localePath('/services#branding')">{{ $t('more') }}</v-btn>
    </div>
    <div>
      <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
    </div>
  </section>

  <div class="illustration-advertising">
    <component-clouds/>
    <img class="illustration" src="~assets/images/communications.svg" alt="Illustration">
    <component-zeppelin/>
  </div>

  <section class="advertising boundaries">
    <h2>{{ $t('advertising.headline') }}</h2>
    <p class="abstract">{{ $t('advertising.abstract') }}</p>
    <div>
      <v-btn large primary :to="localePath('/services#advertising')">{{ $t('more') }}</v-btn>
    </div>
    <div>
      <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
    </div>
  </section>
</div>
</template>

<script>
import wallpaper from '~/components/wallpaper.vue'
import clouds from '~/components/clouds.vue'
import zeppelin from '~/components/zeppelin.vue'

export default {
  name: 'HomePage',
  components: {
    'component-wallpaper': wallpaper,
    'component-clouds': clouds,
    'component-zeppelin': zeppelin
  },
  scrollToTop: true,
  head() {
    return {
      title: this.$t('pages.home')
    }
  },
  i18n: {
    messages: {
      en: {
        more: 'Learn more',
        contact: 'Contact us',
        webdesign: {
          headline: 'Stunning Web Design',
          abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details so you don\'t have to.'
        },
        branding: {
          headline: 'Iconic Branding',
          abstract: 'We develop corporate identitiy solutions that perfectly represent the values of your organisation. We make sure you leave your customers with a lasting positive impression.'
        },
        advertising: {
          headline: 'Smart Advertising',
          abstract: 'We help you aquire new customers with targeted creative advertising. We create everything from ad campaigns to print products like business cards and packaging solutions.'
        }
      },
      de: {
        more: 'Mehr Erfahren',
        contact: 'Kontakt',
        webdesign: {
          headline: 'Fabelhafte Webseiten',
          abstract: 'Wir erstellen individuelle Kommunikationslösungen im Bereich Webdesign. Wir legen höchsten Wert auf ansprechendes Design, Funktionalität, Verfügbarkeit und Barrierefreiheit.'
        },
        branding: {
          headline: 'Individuelle Marken',
          abstract: 'Hinterlasse einen bleibenden Eindruck! Wir entwickeln eine einzigartige Idendität für deine Organisation oder dein Projekt. Unsere Logos sind schlicht, wiedererkennbar und einzigartig.'
        },
        advertising: {
          headline: 'Wirksame Werbung',
          abstract: 'Erweitere deine Kundschaft mithilfe kreativer Werbemassnahmen. Wir erarbeiten digitale Werbekampagnen nach deinen Wünschen. Wir kümmern uns auch um Druckprodukte wie Plakate, Visitenkarten, Verpackungen und Ähnliches'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
