<template>
<div id="index">
  <section-wallpaper></section-wallpaper>
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
    <div class="clouds boundaries">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 117">
        <g>
          <path id="cloud-4" d="M275,95.73a7.79,7.79,0,1,0-15.31-.15h-2.39a7.46,7.46,0,0,0,0,14.92h16.22A7.46,7.46,0,0,0,275,95.73Z" />
          <path id="cloud-3" d="M132.46,14.41h-1.77a5.78,5.78,0,1,0-11.38.11,5.54,5.54,0,0,0,1.1,11h12a5.54,5.54,0,1,0,0-11.09Z" />
          <path id="cloud-2" d="M39.53,74.48a8.41,8.41,0,0,0-14.32-7.42,12.63,12.63,0,1,0-6.58,23.4c.31,0,.6,0,.9,0a8.16,8.16,0,0,0,.85,0H37.93a8.07,8.07,0,0,0,1.6-16Z" />
          <path id="cloud-1" d="M368.37,35.2a12.55,12.55,0,0,0-6.58,1.87,8.41,8.41,0,0,0-14.32,7.42,8.07,8.07,0,0,0,1.6,16h17.54a8.16,8.16,0,0,0,.85,0c.3,0,.6,0,.9,0a12.63,12.63,0,1,0,0-25.26Z" />
        </g>
      </svg>
    </div>
    <img class="illustration" src="~assets/images/communications.svg" alt="Illustration">
    <img class="zeppelin" src="~assets/images/zeppelin.svg" alt="Zeppelin">
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

export default {
  name: 'HomePage',
  components: {
    'section-wallpaper': wallpaper
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
          abstract: 'Wir erstellen individuelle Kommunikationslösungen im Bereich Webdesign. Wir legen höchsten Wert auf ansprechendes Design, Funktionaliät, Verfügbarkeit und Barrierefreiheit.'
        },
        branding: {
          headline: 'Individuelle Marken',
          abstract: 'Hinterlasse einen bleibenden Eindruck! Wir entwickeln eine einzigartige Idendität für deine Organisation oder dein Projekt. Unsere Logos sind schlicht, wiedererkennbar und einzigartig.'
        },
        advertising: {
          headline: 'Wirksame Werbung',
          abstract: 'Erweiter deine Kundschaft mithilfe kreativer Werbemassnahmen. Wir erarbeiten digitale Werbekampanien nach deinen Wünschen. Wir kümmern uns auch um Druckprodukte wie Plakate, Visitenkarten, Verpackungen und ähnliches'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
